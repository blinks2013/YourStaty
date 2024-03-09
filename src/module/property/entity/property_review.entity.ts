import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
    TableOptions
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { PropertyDetailsEntity } from './property_details.entity';

const tableOptions: TableOptions = {
    tableName: 'propertyReview',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
};
@Table(tableOptions)
export class PropertyReviewEntity extends Model<PropertyReviewEntity>{
    @Column({
        type: DataType.UUID,
        primaryKey:true,
        defaultValue: DataType.UUIDV4
    })
    public id:string;

    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    public rating:number;

    @ForeignKey(()=>PropertyDetailsEntity)
    @Column({
        type: DataType.UUID,
        allowNull:false
    })
    public propertyId:string;

    @ForeignKey(()=> UserEntity)
    @Column({
        type: DataType.UUID,
        allowNull:false
    })
    public userId:string;

    @Column({
        type:DataType.STRING(1000),
        allowNull: false,
    })
    public title:string;

    @Column({
        type: DataType.STRING(1000),
        allowNull: false,
    })
    public review: string;

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    public image:string;

    @BelongsTo(()=> UserEntity)
    user:UserEntity

    @BelongsTo(()=> PropertyDetailsEntity)
    propertyDetails: PropertyDetailsEntity
}