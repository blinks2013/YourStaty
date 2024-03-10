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

    async getUserById(id:string){
        return await UserEntity.findOne({
            where:{
                id
            }
        })
    }

    async updateUserProfile(updateUserProfileInfo:UpdateUserProfileDTO){
        await UserEntity.update({...updateUserProfileInfo, statusComplete:true},{
            where:{
                id:{
                    [Op.eq]:updateUserProfileInfo.id
                }
            }
        })

        return await this.getUserById(updateUserProfileInfo.id);
    }
    
    async getUserProfile(id:string){
        return await UserEntity.findOne({
            where:{
                id
            }
        })
    }
}
