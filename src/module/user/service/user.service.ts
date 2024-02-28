import { Injectable } from '@nestjs/common';
import { CreateNewUserDTO } from '../dto/create_user.dto';
import { OtherServiceGatewayService } from 'src/service-gateway/service/other_service.service';

@Injectable()
export class UserService {
    constructor(
        private otherServiceGatewayService: OtherServiceGatewayService,
    ) {}

    async getAllUser(userInfo: CreateNewUserDTO) {
        console.log({ userInfo });

        await this.otherServiceGatewayService.getHelperData({
            resetToken: 'reset token',
        });

        return 'Sending all user';
    }
}
