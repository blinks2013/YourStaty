import { Body, Controller, Patch, Post,Get, Param, Query } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { UserService } from '../service/user.service';
import { OtpDto } from '../dto/otp.dto';
import { UpdateUserProfileDTO } from '../dto/update_userProfile.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { IsUUidOrNotDto } from 'src/module/property/dto/check_id_is_uuid.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/login')
    async userLoginController(@Body() loginInfo: LoginDto) {
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

    @Get()
    async getUserProfileController(@Query() userId:IsUUidOrNotDto){
        const userProfile = await this.userService.getUserProfileService(userId.id)
        if(userProfile){
            return {
                message:'User Profile',
                data:userProfile
            }
        }else{
            throw new HttpExceptionWrapper('User does not exist',404)
        }
    }
}
