import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class FilterDto{

    @IsLatitude()
    @IsNotEmpty()
    latitude:number;

    @IsLongitude()
    @IsNotEmpty()
    longitude:number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    minPrice?:number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    maxPrice?:number;

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