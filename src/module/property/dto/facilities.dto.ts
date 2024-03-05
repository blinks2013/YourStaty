import { IsIn, IsOptional } from 'class-validator';

export class FacilitiesDto {
    @IsOptional()
    @IsIn([true])
    freeWifi: boolean;

    @IsOptional()
    @IsIn([true])
    airConditioning: boolean;

    @IsOptional()
    @IsIn([true])
    parking: boolean;

    @IsOptional()
    @IsIn([true])
    television: boolean;

    @IsOptional()
    @IsIn([true])
    laundry: boolean;

    @IsOptional()
    @IsIn([true])
    kitchen: boolean;
}
