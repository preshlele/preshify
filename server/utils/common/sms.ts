export const sendSMS = async (recipients: string[], message: string) => {
  const apiKey = process.env.SMS_API_KEY;
  const baseUrl = process.env.SMS_API_URL;
  const sender = process.env.SMS_SENDER_ID;
  const url = `${baseUrl}v2/sms/send`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      sender,
      message,
      recipients,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send SMS: ${errorText}`);
  }

  return await response.json();
};
