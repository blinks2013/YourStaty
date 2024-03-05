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
<<<<<<< Updated upstream
        defaultValue: DataType.UUID
=======
        defaultValue: DataType.UUIDV4,
>>>>>>> Stashed changes
    })
    public id: string;

    @Column({
        type: DataType.STRING,
<<<<<<< Updated upstream
        allowNull: false
=======
        allowNull: true,
>>>>>>> Stashed changes
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
