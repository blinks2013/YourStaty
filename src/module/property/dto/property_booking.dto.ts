import { IsAlphanumeric, IsDate, IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, IsUUID, IsUppercase, ValidateNested } from "class-validator";
import { IsSaudiNumber } from "src/utils/custom-validator/is_saudi_number.validator";
import { PickType } from "@nestjs/swagger";
import { GuestDto } from "./guest.dto";
import { Type } from "class-transformer";

export class PropertyBookingDto extends PickType(GuestDto,['name','email','idProof','number','countryCode','code']){
    @IsNotEmpty()
    @IsUUID()
    public PropertyId:string;

    @IsNotEmpty()
    @IsDate()
    public bookingDate: string;

    @ValidateNested({each:true})
    @Type(()=> GuestDto)
    public Guest:GuestDto[]

}