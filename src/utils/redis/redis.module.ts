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
                return new Redis.Redis({
                    host:"172.31.7.78",
                    port:6379,
                    password:"ylYI932o9Wp9fH1CO9uL"
                });
            },
        },
        RedisService,
    ],
    exports: [RedisService],
})
export class RedisModule {}