import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { PropertyDetailsEntity } from './property_details.entity';
import { table } from 'console';

@Table({
    tableName: 'propertyAddress',
    createdAt: true,
    updatedAt: false
})
export class PropertyAddressEntity extends Model<PropertyAddressEntity> {
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
    public city: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public province: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public country: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    public latitude: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    public longitude: Number;

    @HasOne(() => PropertyDetailsEntity)
    propertyDetails: PropertyDetailsEntity;
}
