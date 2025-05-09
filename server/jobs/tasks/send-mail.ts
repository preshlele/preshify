import { logger, task } from "@trigger.dev/sdk/v3";

import { mailsQueue } from "~~/server/jobs/queues";
import { sendTemplatedEmail } from "~~/server/utils/common/emails";

export const sendMailTask = task({
    id: "tasks/send-mail",
    queue: mailsQueue,
    run: async (payload: { to: string, subject: string, template: string, data: Record<string, any> }, { ctx }) => {
        const { to, subject, template, data } = payload;

        logger.log("Sending mail to this email: ", { email: to });

        await sendTemplatedEmail({ to, subject, templateName: template, context: data });
    },
});