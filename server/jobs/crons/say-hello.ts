import { logger, schedules, wait, tasks } from "@trigger.dev/sdk/v3";

import type { sayHelloTask } from '~~/server/jobs/tasks/say-hello';

export const sayHelloCron = schedules.task({
    id: "crons/say-hello",
    // Every hour
    cron: "0 * * * *",
    // Set an optional maxDuration to prevent tasks from running indefinitely
    maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
    run: async (payload, { ctx }) => {
        // The payload contains the last run timestamp that you can use to check if this is the first run
        // And calculate the time since the last run
        const distanceInMs =
            payload.timestamp.getTime() - (payload.lastTimestamp ?? new Date()).getTime();

        logger.log("First scheduled tasks", { payload, distanceInMs });

        const handle = await tasks.trigger<typeof sayHelloTask>('tasks/say-hello', { name: "Presh" });
        logger.log("Say Hello Job is running with handle", { handleId: handle.id });

        // Wait for 5 seconds
        await wait.for({ seconds: 5 });

        // Format the timestamp using the timezone from the payload
        const formatted = payload.timestamp.toLocaleString("en-US", {
            timeZone: payload.timezone,
        });

        logger.log(formatted);
    },
});