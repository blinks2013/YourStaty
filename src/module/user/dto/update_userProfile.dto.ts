import { IsAlphanumeric, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID, IsMobilePhone } from 'class-validator';

export class UpdateUserProfileDTO {
    @IsNotEmpty()
    @IsUUID()
    public userId:string;

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

    @IsOptional()
    @IsMobilePhone()
    public mobileNumber?:string;
}
