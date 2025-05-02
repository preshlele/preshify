import { eq } from "drizzle-orm";
import { Provider, Role } from "../../../enums/auth";

export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody(event)

  try {
    // Find user
    const user = await useDb().query.users.findFirst({
      where: eq(tables.users.email, email)
    });


    if (user) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Email address already in use. Kindly login with your valid credentials!'
      }));
    }

    const hashedPassword = await hashPassword(password);

    const [newUser] = await useDb()
      .insert(tables.users)
      .values({
        email,
        name,
        role: Role.Customer,
        provider: Provider.Credentials,
        password: hashedPassword,
        avatar: 'https://ui-avatars.com/api/?name=' + name
      })
      .returning();

 
    if (!newUser) {
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: 'Registration failed. Please try again or contact our support!'
      }));
    }

    // Send confirmation email

    await setUserSession(event, {
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        avatar: newUser.avatar,
        role: newUser.role,
        provider: newUser.provider
      },
      loggedInAt: new Date()
    });

    // Don't return sensitive data
    const { password: userPassword, ...safeUser } = newUser;

    return { user: safeUser };
  } catch (err) {
    console.error('Error during user registration', err);

    throw createError({
      statusCode: 500,
      statusMessage: "It's not you, it's us. Please try again later or reach out to our support!"
    });
  }

})
