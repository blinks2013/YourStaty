import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AddPropertyDto } from '../dto/add_property.dto';
import { PropertyService } from '../service/property.service';
import { FilterDto } from '../dto/filters.dto';
import { RatingAndReviewDto } from '../dto/rating_and_review.dto';
import { IsUUidOrNotDto } from '../dto/check_id_is_uuid.dto';

@Controller()
export class PropertyController {
    constructor(private propertyService: PropertyService) {}
    @Post()
    async addPropertyController(@Body() addPropertyInfo: AddPropertyDto) {
        return this.propertyService.addPropertyService(addPropertyInfo);
    }

    @Get()
    async getAllProperties(@Query() filters:FilterDto) {
        return await this.propertyService.getAllProperties(filters);
    }

    @Post('/rating')
    async userRatingOnPropertyController(@Body() ratingAndReviewInfo: RatingAndReviewDto){
          const rating=await this.propertyService.userRatingOnPropertyService(ratingAndReviewInfo)
          return {
            message:"Rating is sucessfully added",
            data:rating
          }
    }

    @Get('/rating')
    async getPropertyRatingController(@Query()propertyId:IsUUidOrNotDto ){
        const ratingDetails=await this.propertyService.getPropertyRatingService(propertyId.id)
        return {
            message:'Rating and review of property',
            data:ratingDetails
        }
    }
}
