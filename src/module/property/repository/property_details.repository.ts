import { Injectable, Inject } from '@nestjs/common';
import { PropertyDetailsEntity } from '../entity/property_details.entity';
import { PropertyAddressEntity } from '../entity/property_address.entity';
import { PropertyFacilitiesEntity } from '../entity/property_facilities.entity';
import { PropertySpecificationEntity } from '../entity/property_specification.entity';
import { AddPropertyDto } from '../dto/add_property.dto';
import { Sequelize } from 'sequelize-typescript';
import { FilterDto } from '../dto/filters.dto';
import { Op, OrderItem } from 'sequelize';

@Injectable()
export class PropertyDetailsRepository {
    constructor(@Inject('SEQUELIZE') private sequelize: Sequelize) {}
    async addPropertyDetails(addPropertyInfo: AddPropertyDto) {
        const transaction = await this.sequelize.transaction();
        try {
            const addressDetails = await PropertyAddressEntity.create(
                addPropertyInfo.address
            );
            const propertyDetails = await PropertyDetailsEntity.create({
                title: addPropertyInfo.title,
                category: addPropertyInfo.category,
                rentalPrice: addPropertyInfo.rentalPrice,
                bhk: addPropertyInfo.bhk ? addPropertyInfo.bhk : null,
                about: addPropertyInfo.about,
                additionalInfo: addPropertyInfo.additionalInfo
                    ? addPropertyInfo.additionalInfo
                    : null,
                termsAndCondition: addPropertyInfo.termsAndCondition
                    ? addPropertyInfo.termsAndCondition
                    : null,
                images: JSON.stringify(addPropertyInfo.images),
                video: addPropertyInfo.video ? addPropertyInfo.video : null,
                status: addPropertyInfo.status,
                addressId: addressDetails.id
            });
            await PropertyFacilitiesEntity.create({
                ...addPropertyInfo.facilities,
                propertyId: propertyDetails.id
            });
            await PropertySpecificationEntity.create({
                ...addPropertyInfo.specification,
                propertyId: propertyDetails.id
            });
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            console.log(err);
        }
    }
    
    async getAllProperties(filters: FilterDto) {
        const order = await this.formatSorting(filters.sortBy);
    
        const distance = 1000;
        const sequelize = PropertyDetailsEntity.sequelize;
        const haversineFormula = sequelize.literal(
            `6371 * acos(cos(radians(${filters.latitude})) * cos(radians("propertyAddress"."latitude")) 
            * cos(radians("propertyAddress"."longitude") - radians(${filters.longitude})) + sin(radians(${filters.latitude})) 
            * sin(radians("propertyAddress"."latitude")))`
        );
    
        return await PropertyDetailsEntity.findAll({
            include: [
                {
                    model: PropertyAddressEntity,
                    as: 'propertyAddress',
                    where: sequelize.where(haversineFormula, '<=', distance),
                }
            ],
            where: {
                ...(filters.minPrice && filters.maxPrice ? {
                    rentalPrice: {
                        [Op.between]: [filters.minPrice, filters.maxPrice]
                    },
                } : {}),
    
                ...(filters.propertyCategory
                    ? {
                        category: {
                            [Op.in]: [filters.propertyCategory],
                        },
                    }
                    : {}),
    
                ...(filters.bhkType
                    ? {
                        bhk: {
                            [Op.in]: [filters.bhkType],
                        },
                    }
                    : {}),
            },
            order: order,
        });
    }
    
    
    private async formatSorting(sortBy: string): Promise<OrderItem[]> {
        const order: OrderItem[] = [];
    
        if (sortBy && /^(.*):(ASC|DESC)$/i.test(sortBy)) {
            const [column, orderDirection] = sortBy.split(':');
            order.push([column, orderDirection.toUpperCase()] as OrderItem);
        } else {
            order.push(['createdAt', 'DESC'] as OrderItem);
        }
        return order;
    }
    
}
