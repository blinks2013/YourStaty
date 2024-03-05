import { registerAs } from '@nestjs/config';

export default registerAs(
    'service',
    (): Record<string, string | number | boolean | object> => ({
        redis: {
            host:process.env.REDIS_HOST,
            port:process.env.REDIS_PORT
        },
    }),
);