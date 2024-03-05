import { IsMobilePhone, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OtpDto{
    @IsNotEmpty()
    @IsString()
    otp:string;

    @IsNotEmpty()
    @IsMobilePhone()
    number:string
}