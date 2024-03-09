import { IsBoolean, IsIn, IsLatitude, IsLongitude, IsNumberString, IsOptional, IsPositive, IsString, IsUUID, ValidateIf} from "class-validator";

export class FilterDto{
    @IsOptional()
    @IsUUID()
    propertyId:string;

    @IsOptional()
    @IsIn(['true','false'])
    isHomePage:string;

    @IsLatitude()
    @ValidateIf((value)=>value.isHomePage!=undefined)
    latitude:number;

    @IsLongitude()
    @ValidateIf((value)=>value.isHomePage!=undefined)
    longitude:number;

    @IsOptional()
    @IsNumberString()
    minPrice?:string;

    @IsOptional()
    @IsNumberString()
    maxPrice?:string;

    @IsOptional()
    @IsString()
    propertyCategory?:string;

    @IsOptional()
    @IsString()
    bhkType?:string;

    @IsOptional()
    @IsString()
    sortBy?:string;

    //It has chalange to implement
    // @IsString()
    // @IsOptional()
    // amenities:string;

    //Not Implemented Yet
    // @IsString()
    // @IsOptional()
    // ratings:string;
}