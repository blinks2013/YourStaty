import { IsArray, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, Min, ValidateIf, maxLength, min } from "class-validator";
import { PropertyAddressDto } from "./property_address.dto";
import { PropertySpecificationDto } from "./property_specification.dto";
import { FacilitiesDto } from "./facilities.dto";
import { PropertyCategoryEnum, PropertyStatusEnum } from "../enum/property.enum";
export class AddPropertyDto{

    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsIn(Object.values(PropertyCategoryEnum))
    category:PropertyCategoryEnum

    @IsNotEmpty()
    @Min(1)
    rentalPrice:number

    @IsOptional()
    @IsInt()
    @Min(1)
    @ValidateIf((value)=> value.category===PropertyCategoryEnum.FLAT)
    bhk:number

    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    about:string

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    additionalInfo: string

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    termsAndCondition: string

    @IsNotEmpty()
    @Min(11)
    rentalPeriod:number

    @IsNotEmpty()
    @IsArray()
    @IsUrl({},{each:true})
    images:string[]

    @IsOptional()
    @IsUrl()
    video:string

    @IsNotEmpty()
    @IsIn(Object.values(PropertyStatusEnum))
    status:PropertyStatusEnum

    @IsNotEmpty()
    address: PropertyAddressDto

    @IsNotEmpty()
    specification: PropertySpecificationDto

    @IsOptional()
    facilities: FacilitiesDto
}