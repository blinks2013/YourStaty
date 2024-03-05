import { registerAs } from '@nestjs/config';

export default registerAs(
    'database',
    (): Record<string, string | number | boolean | object> => ({
        postgres: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            databaseName: process.env.DB_NAME
        }
    })
);
