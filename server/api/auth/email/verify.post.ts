import { eq } from "drizzle-orm";
import { verifyEmailSchema } from "~~/schemas/common/auth";
import { Type } from "~~/enums/verification";

export default defineEventHandler(async (event) => {
  const { user: authUser } = await getUserSession(event)

  const { token } = await readValidatedBody(event, verifyEmailSchema.parse);

  try {
    const verification = await useDb().query.verifications.findFirst({
      where: ((verifications, { eq, and, gte }) => and(
        eq(verifications.token, token),
        eq(verifications.userId, authUser?.id!),
        eq(verifications.type, Type.Email),
        gte(verifications.expiresAt, new Date())
      )
      )
    });

    if (!verification) {
      console.error('Verification token does not exist or it has expired', { token });

      return sendError(event, createError({
        statusCode: 400,
        statusMessage: 'Verification failed or has expired!'
      }));
    }

    await useDb().transaction(async (tx) => {
      await tx.update(tables.verifications)
        .set({ verifiedAt: new Date() })
        .where(eq(tables.verifications.id, verification.id));


      await tx.update(tables.users)
        .set({ emailVerifiedAt: new Date() })
        .where(eq(tables.users.id, verification.userId!));
    });

    await setUserSession(event, {
      user: { ...authUser, emailVerified: true },
    });

    return { message: 'Verification was successful' }
  } catch (err) {
    console.error('Error during email verification', err);

    throw createError({
      statusCode: 500,
      statusMessage: "It's not you, it's us. Please try again later or reach out to our support!"
    });
  }
})
