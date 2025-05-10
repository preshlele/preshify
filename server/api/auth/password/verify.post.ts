import { Type } from "~~/enums/verification";
import { verifyPasswordResetSchema } from "~~/schemas/common/auth";

export default defineEventHandler(async (event) => {
  const { token } = await readValidatedBody(event, verifyPasswordResetSchema.parse);

  try {
    const verification = await useDb().query.verifications.findFirst({
      where: ((verifications, { eq, and,isNull, isNotNull, gte }) => and(
        eq(verifications.token, token),
        isNotNull(verifications.userId),
        eq(verifications.type, Type.Password),
        gte(verifications.expiresAt, new Date()),
        isNull(verifications.verifiedAt)
      ))
    });

    if (!verification) {
      console.error('Verification token does not exist or it has expired', { token });

      return sendError(event, createError({
        statusCode: 400,
        statusMessage: 'Verification failed or has expired!'
      }));
    }

    return { message: 'Verification was successful' }
  } catch (err) {
    console.error('Error during password token verification', err);

    throw createError({
      statusCode: 500,
      statusMessage: "It's not you, it's us. Please try again later or reach out to our support!"
    });
  }
})
