import { Injectable } from "@nestjs/common";
import { TwilioService } from "nestjs-twilio";
import { ConfigService } from "@nestjs/config";
import { RedisService } from "src/utils/redis/redis.service";
@Injectable()
export class UserService{
    constructor(private twilioService: TwilioService,private configService: ConfigService, private redisService:RedisService){}
    async sendOtpTouser(number:string){
        console.log(this.configService.get('service.twilio.PHONE_NUMBER'))
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        await this.redisService.setValue(number,
            OTP,50000);
        await this.twilioService.client.messages.create({
            body:`verification Otp ${OTP}`,
            from: this.configService.get('service.twilio.PHONE_NUMBER'),
            to : number,
        })
    }
    async verifyOtpService(Otp:string,mobileNumber:string){
        const redisDetails= await this.redisService.getValue(mobileNumber)
        if(redisDetails == Otp){
            await this.redisService.deleteKey(mobileNumber);
            return "succesfully login";
        }else{
            return "enter valid otp";
        }

    }
}


