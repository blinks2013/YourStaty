import {
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    Table
} from 'sequelize-typescript';
import { PropertyDetailsEntity } from './property_details.entity';

@Table({
    tableName: 'propertyFacilities',
    createdAt: true,
    updatedAt: false
})
export class PropertyFacilitiesEntity extends Model<PropertyFacilitiesEntity> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    public id: string;

    @ForeignKey(() => PropertyDetailsEntity)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    public propertyId: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    public freeWifi: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    public airConditioning: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    public parking: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    public television: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    public laundry: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    public kitchen: boolean;

    @BelongsTo(() => PropertyDetailsEntity)
    propertyDetails: PropertyDetailsEntity;
}
