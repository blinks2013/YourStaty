import {
    Column,
    DataType,
    Model,
    Table,
    TableOptions,
} from 'sequelize-typescript';

const tableOptions: TableOptions = {
    tableName: 'user',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

@Table(tableOptions)
export class User extends Model<User> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4,
    })
    public id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public name: string;
}
