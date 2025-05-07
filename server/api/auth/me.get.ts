export default defineEventHandler(async (event) => {
  try {
    const { user } = await requireUserSession(event);

    return user
  } catch (err) {
    console.error('Error fetching logged in user and associated data.', err);

    throw createError({
      statusCode: 500,
      statusMessage: "It's not you, it's us. Please try again later or reach out to our support!"
    });
  }
})
