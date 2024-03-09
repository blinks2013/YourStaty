import { Module } from '@nestjs/common';
import { PropertyController } from './controller/property.controller';
import { PropertyService } from './service/property.service';
import { PropertyAddressRepository } from './repository/property_address.repository';
import { PropertyDetailsRepository } from './repository/property_details.repository';
import { PropertyFacilitiesRepository } from './repository/property_facilities.repository';
import { PropertySpecificationRepository } from './repository/property_specification.repository';
import { DatabaseModule } from 'src/database/database.module';
import { PropertyReviewRepository } from './repository/property_review.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [PropertyController],
    providers: [
        PropertyService,
        PropertyAddressRepository,
        PropertyFacilitiesRepository,
        PropertyDetailsRepository,
        PropertySpecificationRepository,
        PropertyReviewRepository
    ],
    exports: []
})
export class PropertyModule {}
