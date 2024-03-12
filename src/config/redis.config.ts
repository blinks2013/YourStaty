import { registerAs } from '@nestjs/config';

export default registerAs(
    'service',
    (): Record<string, string | number | boolean | object> => ({
        redis: {
            host:process.env.REDIS_HOST || '172.31.7.78',
            port:process.env.REDIS_PORT || '6379',
            password:process.env.REDIS_PASSWORD || "ylYI932o9Wp9fH1CO9uL"
        },
    }),
);