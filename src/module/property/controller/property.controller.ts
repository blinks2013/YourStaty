import { Controller, Post, Body, Get } from '@nestjs/common';
import { AddPropertyDto } from '../dto/add_property.dto';
import { PropertyService } from '../service/property.service';

@Controller()
export class PropertyController {
    constructor(private propertyService: PropertyService) {}
    @Post()
    async addPropertyController(@Body() addPropertyInfo: AddPropertyDto) {
        return this.propertyService.addPropertyService(addPropertyInfo);
    }

    @Get()
    async getAllProperties() {
        return await this.propertyService.getAllProperties();
    }
}
