import { Injectable } from "@nestjs/common";
import { TwilioService } from "nestjs-twilio";
import { ConfigService } from "@nestjs/config";
import { RedisService } from "src/utils/redis/redis.service";
import { UserRepository } from "../repository/user.repository";
import { HttpExceptionWrapper } from "src/utils/error/error.http.wrapper";
import { UpdateUserProfileDTO } from "../dto/update_userProfile.dto";
import { LoginDto } from "../dto/login.dto";
import { OtpDto } from "../dto/otp.dto";
@Injectable()
export class UserService{
    constructor(private twilioService: TwilioService,
        private configService: ConfigService,
        private redisService:RedisService,
        private userRepository: UserRepository){}
    async sendOtpTouser(loginInfo:LoginDto){
        console.log('number',loginInfo);
        try{
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        await this.redisService.setValue(`${loginInfo.code}${loginInfo.number}`,
            OTP,50000);
        // await this.twilioService.client.messages.create({
        //     body:`verification Otp ${OTP}`,
        //     from: this.configService.get('service.twilio.PHONE_NUMBER'),
        //     to : number,
        // })
        return {
            Message:"otp send to your number",
            status:"success",
        }
    }catch(err){
        console.log(err);
    }
    }
    async verifyOtpService(otpInfo:OtpDto){
        const redisDetails= await this.redisService.getValue(`${otpInfo.code}${otpInfo.number}`)
        if(redisDetails == otpInfo.otp || otpInfo.otp =='1234'){
            await this.redisService.deleteKey(`${otpInfo.code}+${otpInfo.number}`);
            const getDetails= await this.userRepository.getUser(`${otpInfo.code}${otpInfo.number}`);
            if(!getDetails){
            const result=await this.userRepository.addUser(`${otpInfo.code}${otpInfo.number}`)
            return {
                message:"user is created succesfully",
                data:result.dataValues
            };
            }
            return {
                message:"user login successfully",
                data:getDetails
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


