import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { DatabaseService } from './database.service';
import { Logger } from 'winston';
import { Sequelize } from 'sequelize-typescript';
import { PropertyAddressEntity } from 'src/module/property/entity/property_address.entity';
import { PropertyDetailsEntity } from 'src/module/property/entity/property_details.entity';
import { PropertyFacilitiesEntity } from 'src/module/property/entity/property_facilities.entity';
import { PropertySpecificationEntity } from 'src/module/property/entity/property_specification.entity';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { truncateSync } from 'fs';
import { PropertyReviewEntity } from 'src/module/property/entity/property_review.entity';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        inject: [WINSTON_MODULE_PROVIDER, ConfigService, DatabaseService],
        useFactory: async (
            logger: Logger,
            configService: ConfigService,
            databaseService: DatabaseService
        ) => {
            const environment = configService.get('app.env')!;
            const sequelize = new Sequelize(
                configService.get('database.postgres.databaseName')!,
                configService.get('database.postgres.username')!,
                configService.get('database.postgres.password')!,
                {
                    host: configService.get('database.postgres.host')!,
                    port: configService.get('database.postgres.port')!,
                    dialect: configService.get('database.postgres.dialect')!
                }
            );

            // Add table modules here...
            sequelize.addModels([
                PropertyAddressEntity,
                PropertyDetailsEntity,
                PropertyFacilitiesEntity,
                PropertySpecificationEntity,
                UserEntity,
                PropertyReviewEntity
            ]);

            // Sync database with module
            if (environment == 'development') {
                await sequelize.sync({alter:true});
                //await UserEntity.sync({alter:true})
            } else {
                //await sequelize.sync({ alter: true });
            }

            try {
                await sequelize.authenticate({});

                // Seeding data
                await databaseService.seedingData();
            } catch (error) {
                logger.error(error);
            }
            return sequelize;
        }
    }
];
