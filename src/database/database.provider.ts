import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { DatabaseService } from './database.service';
import { Logger } from 'winston';
import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        inject: [WINSTON_MODULE_PROVIDER, ConfigService, DatabaseService],
        useFactory: async (
            logger: Logger,
            configService: ConfigService,
            databaseService: DatabaseService,
        ) => {
            const environment = configService.get('app.env')!;
            const sequelize = new Sequelize(
                configService.get('database.postgres.databaseName')!,
                configService.get('database.postgres.username')!,
                configService.get('database.postgres.password')!,
                {
                    host: configService.get('database.postgres.host')!,
                    dialect: configService.get('database.postgres.dialect')!,
                },
            );

            // Add table modules here...
            sequelize.addModels([]);

            // Sync database with module
            if (environment == 'development') {
                await sequelize.sync();
            } else {
                await sequelize.sync({ alter: true });
            }

            try {
                await sequelize.authenticate({});

                // logger.info('Database connected successfully', {
                //     database: sequelize.config.database,
                //     username: sequelize.config.username,
                //     host: sequelize.config.host,
                //     port: sequelize.config.port,
                // });

                // Seeding data
                await databaseService.seedingData();
            } catch (error) {
                logger.error(error);
            }
            return sequelize;
        },
    },
];
