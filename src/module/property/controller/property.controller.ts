import { Controller } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { AddPropertyDto } from "../dto/add_property.dto";
import { PropertyService } from "../service/property.service";

@Controller()
export class PropertyController{
    constructor(private propertyService: PropertyService){}
    @Post()
    async addPropertyController(@Body() addPropertyInfo: AddPropertyDto){
        console.log("========",addPropertyInfo);
        return this.propertyService.addPropertyService(addPropertyInfo)
    }
}