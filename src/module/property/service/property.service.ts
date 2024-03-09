import { Injectable } from '@nestjs/common';
import { AddPropertyDto } from '../dto/add_property.dto';
import { PropertyDetailsRepository } from '../repository/property_details.repository';
import { PropertyAddressEntity } from '../entity/property_address.entity';
import { PropertyFacilitiesRepository } from '../repository/property_facilities.repository';
import { PropertySpecificationRepository } from '../repository/property_specification.repository';
import { PropertyAddressRepository } from '../repository/property_address.repository';
import { RatingAndReviewDto } from '../dto/rating_and_review.dto';
import { PropertyReviewRepository } from '../repository/property_review.repository';

@Injectable()
export class PropertyService {
    constructor(
        private propertyDetailsRepository: PropertyDetailsRepository,
        private propertyAddressRepository: PropertyAddressRepository,
        private propertyFacilitiesRepository: PropertyFacilitiesRepository,
        private propertySpecificationRepository: PropertySpecificationRepository,
        private propertyReviewRepository: PropertyReviewRepository
    ) {}
    async addPropertyService(addPropertyInfo: AddPropertyDto) {
        return await this.propertyDetailsRepository.addPropertyDetails(
            addPropertyInfo
        );
    }

    async getAllProperties() {
        return await this.propertyDetailsRepository.getAllProperties();
    }

    async userRatingOnPropertyService(ratingAndReviewInfo: RatingAndReviewDto){
        return await this.propertyReviewRepository.addRatingAndReview(ratingAndReviewInfo)
    }

    async getPropertyRatingService(id:string){
        return await this.propertyReviewRepository.getRatingAndReview(id)
    }
}
