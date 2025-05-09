import {queue} from "@trigger.dev/sdk/v3";

export const defaultQueue = queue({
    name: "default",
    concurrencyLimit: 10,
});

export const mailsQueue = queue({
    name: "mails",
    concurrencyLimit: 10,
});

export const smsQueue = queue({
    name: "sms",
    concurrencyLimit: 5,
});