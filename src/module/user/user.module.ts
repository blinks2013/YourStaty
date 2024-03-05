import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from 'src/utils/redis/redis.module';
import { UserRepository } from './repository/user.repository';

@Module({
    imports: [PaginationModule, ServiceGatewayModule, RedisModule,TwilioModule.forRootAsync({
        imports:[ConfigModule],
        useFactory:(configService: ConfigService)=>({
            accountSid: configService.get('service.twilio.ACCOUNT_SID'),
            authToken: configService.get('service.twilio.AUTH_TOKEN')
        }),
        inject:[ConfigService]
    })],
    controllers: [UserController],
    providers: [UserService,UserRepository],
    exports: [RedisModule],
})
export class UserModule {}
