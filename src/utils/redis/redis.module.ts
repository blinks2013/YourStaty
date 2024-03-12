import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Redis from 'ioredis';
import { RedisService } from './redis.service';

@Module({
    imports: [],
    providers: [
        {
            provide: 'REDIS_CLIENT',
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                console.log("=======",configService.get('service.redis.host'))
                return new Redis.Redis({
                    host: configService.get('service.redis.host'),
                    port: configService.get('service.redis.port'),
                    // username: configService.get('redis.username'),
                    password: configService.get('service.redis.password'),
                });
            },
        },
        RedisService,
    ],
    exports: [RedisService],
})
export class RedisModule {}