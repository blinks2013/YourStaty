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
    tableName: 'propertySpecification',
    createdAt: true,
    updatedAt: false
})
export class PropertySpecificationEntity extends Model<PropertySpecificationEntity> {
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
        type: DataType.INTEGER,
        allowNull: false
    })
    public bedRooms: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public bathRooms: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public length: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public breadth: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public unit: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    public carpetArea: number;

    @BelongsTo(() => PropertyDetailsEntity)
    propertyDetails: PropertyDetailsEntity;
}
