import { Injectable } from '@nestjs/common';
import { AddPropertyDto } from '../dto/add_property.dto';
import { PropertyDetailsRepository } from '../repository/property_details.repository';
import { PropertyAddressEntity } from '../entity/property_address.entity';
import { PropertyFacilitiesRepository } from '../repository/property_facilities.repository';
import { PropertySpecificationRepository } from '../repository/property_specification.repository';
import { PropertyAddressRepository } from '../repository/property_address.repository';

@Injectable()
export class PropertyService {
    constructor(
        private propertyDetailsRepository: PropertyDetailsRepository,
        private propertyAddressRepository: PropertyAddressRepository,
        private propertyFacilitiesRepository: PropertyFacilitiesRepository,
        private propertySpecificationRepository: PropertySpecificationRepository
    ) {}
    async addPropertyService(addPropertyInfo: AddPropertyDto) {
        return await this.propertyDetailsRepository.addPropertyDetails(
            addPropertyInfo
        );
    }

    async getAllProperties() {
        return await this.propertyDetailsRepository.getAllProperties();
    }
}
