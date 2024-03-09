import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min,IsArray,IsUrl } from "class-validator";

export class RatingAndReviewDto{
    @IsNotEmpty()
    @IsNumber()
    @Max(5)
    @Min(1)
    public rating:number;

    @IsNotEmpty()
    @IsUUID()
    public userId:string;

    @IsNotEmpty()
    @IsUUID()
    public propertyId:string;

    @IsNotEmpty()
    @IsString()
    public title:string;

    @IsNotEmpty()
    @IsString()
    public review:string;

    @IsOptional()
    @IsArray()
    @IsUrl({},{each:true})
    public image: string[];
}