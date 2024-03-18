import { IsAlphanumeric,IsEmail, IsIn, IsNotEmpty, IsNumber, IsString, IsUppercase } from "class-validator";
import { IsSaudiNumber } from "src/utils/custom-validator/is_saudi_number.validator";

export class GuestDto{

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    public idProof: string;

    @IsNotEmpty()
    @IsString()
    @IsSaudiNumber()
    public number:string

    @IsNotEmpty()
    @IsString()
    @IsUppercase()
    public countryCode:string;

    @IsNotEmpty()
    @IsString()
    public code: string;

    @IsNotEmpty()
    @IsNumber()
    public age: number;

    @IsNotEmpty()
    @IsString()
    @IsIn(['male','female','other'])
    public gender:string;
}