import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FilterDto{

    @IsLatitude()
    @IsNotEmpty()
    latitude:number;

    @IsLongitude()
    @IsNotEmpty()
    longitude:number;

    @IsNumber()
    @IsOptional()
    minPrice:number;

    @IsNumber()
    @IsOptional()
    maxPrice:number;

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