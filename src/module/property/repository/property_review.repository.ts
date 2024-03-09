import { UserEntity } from "src/module/user/entity/user.entity";
import { RatingAndReviewDto } from "../dto/rating_and_review.dto";
import { PropertyReviewEntity } from "../entity/property_review.entity";
import { Injectable } from "@nestjs/common";
import { Op } from "sequelize";

@Injectable()
export class PropertyReviewRepository{
    async addRatingAndReview(ratingAndReviewInfo:RatingAndReviewDto){
        return PropertyReviewEntity.create({
            rating:ratingAndReviewInfo.rating,
            review:ratingAndReviewInfo.review,
            propertyId:ratingAndReviewInfo.propertyId,
            image:ratingAndReviewInfo.image?JSON.stringify(ratingAndReviewInfo.image):null,
            userId: ratingAndReviewInfo.userId,
            title:ratingAndReviewInfo.title
        });
    }

    async getRatingAndReview(id:string){
        return await PropertyReviewEntity.findAll({
            include:[{
                model: UserEntity,
                attributes:['name','email']
            }],
            where:{
                propertyId:{
                    [Op.eq]:id
                }
            }
        })
    }
}