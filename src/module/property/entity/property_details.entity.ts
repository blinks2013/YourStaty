import {
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasOne,
    Table,
    HasMany
} from 'sequelize-typescript';
import { PropertyAddressEntity } from './property_address.entity';
import { PropertyFacilitiesEntity } from './property_facilities.entity';
import { PropertySpecificationEntity } from './property_specification.entity';
import {
    PropertyCategoryEnum,
    PropertyStatusEnum,
    PropertyTagEnum
} from '../enum/property.enum';
import { PropertyReviewEntity } from './property_review.entity';

@Table({
    tableName: 'propertyDetails',
    createdAt: true,
    updatedAt: false
})
export class PropertyDetailsEntity extends Model<PropertyDetailsEntity> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    public id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public title: string;

    @Column({
        type: DataType.ENUM(...Object.values(PropertyCategoryEnum)),
        allowNull: false
    })
    public category: PropertyCategoryEnum;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public rentalPrice: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    public bhk: number;

    @Column({
        type: DataType.STRING(1000),
        allowNull: false
    })
    public about: string;

    @Column({
        type: DataType.STRING(1000),
        allowNull: true
    })
    public additionalInfo: string;

    @Column({
        type: DataType.STRING(1000),
        allowNull: true
    })
    public termsAndCondition: string;

    @Column({
        type: DataType.STRING(10000),
        allowNull: false
    })
    public images: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    public video: string;

    @Column({
        type: DataType.ENUM(...Object.values(PropertyStatusEnum)),
        allowNull: false
    })
    public status: PropertyStatusEnum;

    @Column({
        type: DataType.ENUM(...Object.values(PropertyTagEnum)),
        allowNull: false,
    })
    public tag: PropertyTagEnum;

    @ForeignKey(() => PropertyAddressEntity)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    public addressId: string;

    @BelongsTo(() => PropertyAddressEntity)
    propertyAddress: PropertyAddressEntity;

    @HasOne(() => PropertyFacilitiesEntity)
    propertyFacilities: PropertyFacilitiesEntity;

    @HasOne(() => PropertySpecificationEntity)
    propertySpecification: PropertySpecificationEntity;

    @HasMany(()=>PropertyReviewEntity)
    propertyReview: PropertyReviewEntity
}
