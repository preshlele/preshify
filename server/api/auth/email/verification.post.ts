import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";
import { tasks } from "@trigger.dev/sdk/v3";

import { emailVerificationSchema, } from "~~/schemas/common/auth";
import { Type } from "~~/enums/verification";
import { sendMailTask } from "~~/server/jobs/tasks/send-mail";

export default defineEventHandler(async (event) => {
  const { user: authUser } = await getUserSession(event)

  const { email } = await readValidatedBody(event, emailVerificationSchema.parse);

  try {
    const verification = await useDb().query.verifications.findFirst({
      where: ((verifications, { eq, and, gte }) => and(
        eq(verifications.identifier, email),
        eq(verifications.userId, authUser?.id!),
        eq(verifications.type, Type.Email),
        gte(verifications.expiresAt, new Date())
      ))
    });

    const token = randomUUID();
    await useDb().transaction(async (tx) => {
      if (verification) {
        await tx.update(tables.verifications)
          .set({ expiresAt: new Date() })
          .where(eq(tables.verifications.id, verification.id));
      }

      tx.insert(tables.verifications)
        .values({
          identifier: email,
          type: Type.Email,
          token,
          userId: authUser?.id!,
          expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000)
        });
    });

    const config = useRuntimeConfig();

    await tasks.trigger<typeof sendMailTask>(
      'tasks/send-mail',
      {
        to: email,
        subject: 'Verify your email address',
        template: 'auth/email/verification',
        data: { name: authUser?.name, token, baseUrl: config.public.baseUrl }
      }
    );

    return { message: 'Verification was sent' }
  } catch (err) {
    console.error('Error sending email verification', err);

    throw createError({
      statusCode: 500,
      statusMessage: "It's not you, it's us. Please try again later or reach out to our support!"
    });
  }
})
