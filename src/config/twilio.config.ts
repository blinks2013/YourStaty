import { registerAs } from '@nestjs/config';

export default registerAs(
    'service',
    (): Record<string, string | number | boolean | object> => ({
        twilio: {
            ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
            AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
            PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER
        },
    }),
);