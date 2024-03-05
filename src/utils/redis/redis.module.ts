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
                    host: configService.get('redis.host'),
                    port: configService.get('redis.port'),
                    // username: configService.get('redis.username'),
                    //password: configService.get('redis.password'),
                });
            },
        },
        RedisService,
    ],
    exports: [RedisService],
})
export class RedisModule {}