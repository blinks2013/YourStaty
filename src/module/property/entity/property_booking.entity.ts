import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'propertyAddress',
    createdAt: true,
    updatedAt: false
})
export class PropertyBookingEntity extends Model<PropertyBookingEntity>{

}