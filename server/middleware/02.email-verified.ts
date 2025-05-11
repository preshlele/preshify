const excluded = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/email',
  '/api/health',
];

export default defineEventHandler(async (event) => {

  const url = getRequestURL(event).pathname;

  if (excluded.some(path => url.startsWith(path)) || url === '/') {
    return;
  }

  if (!event.context.user?.emailVerified) {
    console.log('Email is unverified!');

    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized!'
    });
  }
});
