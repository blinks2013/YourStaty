import { Body, Controller, Patch, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { UserService } from '../service/user.service';
import { OtpDto } from '../dto/otp.dto';
import { UpdateUserProfileDTO } from '../dto/update_userProfile.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/login')
    async userLoginController(@Body() loginInfo: LoginDto) {
        console.log(loginInfo.number);
        return this.userService.sendOtpTouser(`${loginInfo.number}`);
    }

    @Post('/otp-verification')
    async OtpVerificationController(@Body() otpInfo: OtpDto) {
        return this.userService.verifyOtpService(otpInfo.otp, otpInfo.number);
    }

    @Patch()
    async updateUserProfileController(@Body() updateUserProfileInfo: UpdateUserProfileDTO){
        const updateProfile = await this.userService.updateUserProfileService(updateUserProfileInfo);
        if( updateProfile.length===1){
            return {
                message:"Your profile is updated successfully",
                data: updateUserProfileInfo
            }
        }{
            throw new HttpExceptionWrapper("User does not exist",404);
        }
    }
}
