import {logger, task} from "@trigger.dev/sdk/v3";

import { defaultQueue } from "~~/server/jobs/queues";

export const sayHelloTask = task({
    id: "tasks/say-hello",
    queue: defaultQueue,
    run: async (payload: { name: string }, { ctx }) => {
        const {name} = payload;
        logger.log("Hello: ", {name, ctx});
    },
});