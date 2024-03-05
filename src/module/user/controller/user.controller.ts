import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { UserService } from '../service/user.service';
import { OtpDto } from '../dto/otp.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/login')
<<<<<<< Updated upstream
    async userLoginController(@Body() loginInfo: LoginDto) {
        console.log(loginInfo.number);
=======
     async userLoginController(@Body() loginInfo: LoginDto){
>>>>>>> Stashed changes
        return this.userService.sendOtpTouser(`${loginInfo.number}`);
    }

    @Post('/otp-verification')
    async OtpVerificationController(@Body() otpInfo: OtpDto) {
        return this.userService.verifyOtpService(otpInfo.otp, otpInfo.number);
    }
}
