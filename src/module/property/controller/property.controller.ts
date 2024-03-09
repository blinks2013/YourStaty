import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AddPropertyDto } from '../dto/add_property.dto';
import { PropertyService } from '../service/property.service';
import { FilterDto } from '../dto/filters.dto';

@Controller()
export class PropertyController {
    constructor(private propertyService: PropertyService) {}
    @Post()
    async addPropertyController(@Body() addPropertyInfo: AddPropertyDto) {
        return this.propertyService.addPropertyService(addPropertyInfo);
    }

    @Get()
    async getAllProperties(@Query() filters:FilterDto) {
        return await this.propertyService.getAllProperties(filters);
    }
}
