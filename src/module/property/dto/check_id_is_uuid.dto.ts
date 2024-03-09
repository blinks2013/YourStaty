import { IsNotEmpty, IsUUID } from "class-validator";

export class IsUUidOrNotDto{
    @IsNotEmpty()
    @IsUUID()
    id:string;
}