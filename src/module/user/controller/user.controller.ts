import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "../dto/login.dto";
import { UserService } from "../service/user.service";
import { OtpDto } from "../dto/otp.dto";

@Controller()
export class UserController{
    constructor(private userService: UserService){}
    @Post('/login')
     async userLoginController(@Body() loginInfo: LoginDto){
        console.log(loginInfo.number)
        return this.userService.sendOtpTouser(`${loginInfo.number}`);
     }

    @Post('/otp-verification')
    async OtpVerficationController(@Body() otpInfo: OtpDto){
        return this.userService.verifyOtpService(otpInfo.otp,otpInfo.number)
    }
}

