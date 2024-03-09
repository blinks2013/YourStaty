import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class FilterDto{

    @IsLatitude()
    @IsNotEmpty()
    latitude:number;

    @IsLongitude()
    @IsNotEmpty()
    longitude:number;

    @IsOptional()
    @IsNumberString()
    minPrice?:string;

    @IsOptional()
    @IsNumberString()
    maxPrice?:string;

    @IsString()
    @IsOptional()
    propertyCategory:string;

    @IsString()
    @IsOptional()
    bhkType:string;


    //It has chalange to implement
    // @IsString()
    // @IsOptional()
    // amenities:string;

    //Not Implemented Yet
    // @IsString()
    // @IsOptional()
    // ratings:string;

    @IsString()
    @IsOptional()
    sortBy:string;
}