import {
    Column,
    DataType,
    Model,
    Table,
    TableOptions
} from 'sequelize-typescript';

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
        allowNull: false
    })
    public firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    public lastName:string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    public mobileNumber:string
}
