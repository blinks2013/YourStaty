import {
    IsIn,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Min
} from 'class-validator';

export class PropertySpecificationDto {
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    bedRooms: number;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    bathRooms: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    length: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    breadth: number;

    @IsOptional()
    @IsString()
    @IsIn(['m2'])
    unit?: string = 'm2';

    @IsNotEmpty()
    @IsNumber()
    carpetArea: number;
}
