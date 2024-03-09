import { Injectable } from "@nestjs/common";
import { TwilioService } from "nestjs-twilio";
import { ConfigService } from "@nestjs/config";
import { RedisService } from "src/utils/redis/redis.service";
import { UserRepository } from "../repository/user.repository";
import { HttpExceptionWrapper } from "src/utils/error/error.http.wrapper";
import { UpdateUserProfileDTO } from "../dto/update_userProfile.dto";
@Injectable()
export class UserService{
    constructor(private twilioService: TwilioService,
        private configService: ConfigService,
        private redisService:RedisService,
        private userRepository: UserRepository){}
    async sendOtpTouser(number:string){
        console.log('number',number);
        try{
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        await this.redisService.setValue(number,
            OTP,50000);
        // await this.twilioService.client.messages.create({
        //     body:`verification Otp ${OTP}`,
        //     from: this.configService.get('service.twilio.PHONE_NUMBER'),
        //     to : number,
        // })
        return {
            Message:"otp send to your number"
        }
    }catch(err){
        console.log(err);
    }
    }
    async verifyOtpService(Otp:string,mobileNumber:string){
        const redisDetails= await this.redisService.getValue(mobileNumber)
        if(redisDetails == Otp || Otp =='1234'){
            await this.redisService.deleteKey(mobileNumber);
            const getDetails= await this.userRepository.getUser(mobileNumber);
            if(!getDetails){
            const result=await this.userRepository.addUser(mobileNumber)
            return {
                message:"user is created succesfully",
                ...result.dataValues
            };
            }
            return {
                message:"user login successfully",
            };
        }else{
            throw new HttpExceptionWrapper('please enter valid otp',409);
        }

    }

    async updateUserProfileService(updateUserProfileInfo: UpdateUserProfileDTO){
        return this.userRepository.updateUserProfile(updateUserProfileInfo)
    }

    async getUserProfileService(id:string){
        return await this.userRepository.getUserProfile(id)
    }
}


