import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class LoginDto{
    @IsNotEmpty()
    @IsMobilePhone()
    public number:string
}