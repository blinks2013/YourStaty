import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { Op } from 'sequelize';

// user repository setup
@Injectable()
export class UserRepository {
    async addUser(mobileNumber:string){
        return await UserEntity.create({
            mobileNumber
        })
    }

    async getUser(mobileNumber:string){
        return await UserEntity.findOne({
            where:{
                mobileNumber:{
                    [Op.eq]:mobileNumber
                }
            }
        })
    }
}
