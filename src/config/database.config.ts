import { registerAs } from '@nestjs/config';

export default registerAs(
    'database',
    (): Record<string, string | number | boolean | object> => ({
        postgres: {
            dialect: process.env.DB_DIALECT || 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 5432,
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'root',
            databaseName: process.env.DB_NAME || 'postgres',
        },
    }),
);
