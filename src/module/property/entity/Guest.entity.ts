import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { PropertyBookingEntity } from './property_booking.entity';

@Table({
    tableName: 'propertyAddress',
    createdAt: true,
    updatedAt: false
})
export class GuestEntity extends Model<GuestEntity>{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue: DataType.UUIDV4
    })
    public id:string;

    @ForeignKey(()=>PropertyBookingEntity)
    @Column({
        type:DataType.UUID,
        allowNull:true
    })
    public bookingId:string

    @Column({

    })
    public name:string;

    @Column({

    })
    public email: string;

    @Column({

    })
    public idProof: string;

    @Column({

    })
    public gender:string;

    @Column({

    })
    public age:string;

    @Column({

    })
    public number:string;

    @BelongsTo(()=> PropertyBookingEntity)
    propertyBooking: PropertyBookingEntity
}