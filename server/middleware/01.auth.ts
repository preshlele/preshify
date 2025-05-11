const excluded = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/health',
];

export default defineEventHandler(async (event) => {

  const url = getRequestURL(event).pathname;

  if (excluded.some(path => url.startsWith(path)) || url === '/') {
    return;
  }

  const { user: authUser } = await getUserSession(event);

  if (!authUser) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized!'
    });
  }

  event.context.user = { ...authUser };
});
