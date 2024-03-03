import { Injectable,Inject } from "@nestjs/common";
import { PropertyDetailsEntity } from "../entity/property_details.entity";
import { PropertyAddressEntity } from "../entity/property_address.entity";
import { PropertyFacilitiesEntity } from "../entity/property_facilities.entity";
import { PropertySpecificationEntity } from "../entity/property_specification.entity";
import { AddPropertyDto } from "../dto/add_property.dto";
import { Sequelize } from "sequelize-typescript";

@Injectable()
export class PropertyDetailsRepository{
    constructor(@Inject('SEQUELIZE') private sequelize: Sequelize){}
    async addPropertyDetails(addPropertyInfo:AddPropertyDto){
        const transaction= await this.sequelize.transaction();
        try{
        const addressDetails=await PropertyAddressEntity.create(addPropertyInfo.address)
        const propertyDetails= await PropertyDetailsEntity.create({
            title:addPropertyInfo.title,
            category:addPropertyInfo.category,
            rentalPrice: addPropertyInfo.rentalPrice,
            bhk:addPropertyInfo.bhk?addPropertyInfo.bhk:null,
            about:addPropertyInfo.about,
            additionalInfo:addPropertyInfo.additionalInfo?addPropertyInfo.additionalInfo:null,
            termsAndCondition: addPropertyInfo.termsAndCondition?addPropertyInfo.termsAndCondition:null,
            images:JSON.stringify(addPropertyInfo.images),
            video:addPropertyInfo.video?addPropertyInfo.video:null,
            status:addPropertyInfo.status,
            addressId: addressDetails.id
        })
        await PropertyFacilitiesEntity.create({...addPropertyInfo.facilities,propertyId:propertyDetails.id});
        await PropertySpecificationEntity.create({...addPropertyInfo.specification,propertyId:propertyDetails.id});
        await transaction.commit()
    }catch(err){
        await transaction.rollback()
        console.log(err);
    }
    }
}