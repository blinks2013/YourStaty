import { IsMobilePhone, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsSaudiNumber } from "src/utils/custom-validator/is_saudi_number.validator";

export class OtpDto{
    @IsNotEmpty()
    @IsString()
    otp:string;

    @IsNotEmpty()
    @IsString()
    @IsSaudiNumber()
    number:string
}