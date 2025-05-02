import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {

  const { email, password, remember } = await readBody(event)

  try {
    // Find user
    const user = await useDb().query.users.findFirst({
      where: eq(tables.users.email, email)
    });

    if (!user || !(await verifyPassword(password, user.password!))) {
      console.error('Invalid credentials for user with email: {email}', { email });

      return sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Invalid credentials'
      }));
    }

    // Create session (using Nuxt's built-in session or your own solution)
    await setUserSession(event, {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        role: user.role,
        provider: user.provider
      },
      loggedInAt: new Date()
    });

    // Don't return sensitive data
    const { password: userPassword, ...safeUser } = user;

    return { user: safeUser };
  } catch (err) {
    console.error('Error during login', err);

    throw createError({
      statusCode: 500,
      statusMessage: "It's not you, it's us. Please try again later or reach out to our support!"
    });
  }
})
