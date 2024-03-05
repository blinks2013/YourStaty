import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';

// user repository setup
@Injectable()
export class UserRepository {
    async addUser(mobileNumber:string){
        return await UserEntity.create({
            mobileNumber
        })
    }
}
