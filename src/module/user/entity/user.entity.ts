import {
    Column,
    DataType,
    Model,
    Table,
    TableOptions
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

const tableOptions: TableOptions = {
    tableName: 'user',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
};

@Table(tableOptions)
export class UserEntity extends Model<UserEntity> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUID
    })
    public id: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    public name: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public email:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
        unique:true
    })
    public mobileNumber:string

    @Column({
        type:DataType.STRING,
        allowNull:true,
        unique:true,
    })
    public idProof:string;
}
