import { logger, task } from "@trigger.dev/sdk/v3";

import { smsQueue } from "~~/server/jobs/queues";
import { sendSms } from "~~/server/utils/common/sms";

export const sendSmsTask = task({
    id: "tasks/send-sms",
    queue: smsQueue,
    run: async (payload: { recipients: string[], message: string }, { ctx }) => {
        const { recipients, message } = payload;

        logger.log("Sending sms to these recipients: ", { recipients });

        const res = await sendSms(recipients, message);

        logger.log("Sms sent to recipients with response: ", { res });
    },
});