import { eq } from "drizzle-orm";
import { Provider, Role } from "~~/enums/auth";

export default defineOAuthGoogleEventHandler({
  config: {
    authorizationParams: {
      access_type: 'offline'
    }
  },
  async onSuccess(event, { user, tokens }) {

    const authUser = await useDb().query.users.findFirst({
      where: eq(tables.users.email, user.email)
    });

    if (authUser?.provider === Provider.Credentials) {
      console.log('User already exists. Google authentication failed for user', { email: user.email });
      return sendRedirect(event, '/login');
    }

    if (authUser?.provider === Provider.Google) {
      // TODO: Update user session and data
      await setUserSession(event, {
        user: {
          id: authUser.id,
          email: authUser.email,
          name: authUser.name,
          avatar: authUser.avatar,
          role: authUser.role,
          provider: authUser.provider
        },
        loggedInAt: new Date()
      });

      return sendRedirect(event, '/');
    }

    const [newUser] = await useDb()
      .insert(tables.users)
      .values({
        email: user.email,
        name: user.name,
        role: Role.Customer,
        provider: Provider.Google,
        providerSub: user.sub,
        avatar: user.picture || 'https://ui-avatars.com/api/?name=' + user.name
      })
      .returning();

    if (!newUser) {
      console.log('Failed to create new user using google authentication.', { ...user });

      return sendRedirect(event, '/');

    }

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

    return sendRedirect(event, '/');
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/login')
  },
})
