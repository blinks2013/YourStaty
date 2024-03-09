import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { Op } from 'sequelize';
import { UpdateUserProfileDTO } from '../dto/update_userProfile.dto';

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

    async updateUserProfile(updateUserProfileInfo:UpdateUserProfileDTO){
        return await UserEntity.update({...updateUserProfileInfo, statusComplete:true},{
            where:{
                id:{
                    [Op.eq]:updateUserProfileInfo.userId
                }
            }
        })
    }
    async getUserProfile(id:string){
        return await UserEntity.findOne({
            where:{
                id
            }
        })
    }
}
