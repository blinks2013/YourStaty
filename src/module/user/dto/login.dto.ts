import {IsMobilePhone, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { IsSaudiNumber } from "src/utils/custom-validator/is_saudi_number.validator";

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    @IsSaudiNumber()
    public number:string
}