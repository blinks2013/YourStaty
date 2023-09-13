import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNewUserDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;
}
