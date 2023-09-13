import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [PaginationModule, ServiceGatewayModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {}
