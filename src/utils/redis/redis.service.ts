//import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
//import { Cache } from 'cache-manager';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService {
    constructor(
        //@Inject(CACHE_MANAGER) private cacheManager: Cache,
        @Inject('REDIS_CLIENT') private redisClient: Redis.Redis,
    ) {
        console.log('redis constructor...');
    }

    async setValue<T>(
        key: string,
        value: string,
        time?: number,
    ) {
        (!time)
            ? this.redisClient.set(key, value)
            : this.redisClient.set(key, value, 'EX', time);
        return `${key}:${value} is stored in redis successfully`;
    }

    async getValue(key: string) {
        return await this.redisClient.get(key);
        // if (result) {
        //     return JSON.parse(result);
        // } else {
        //     return ${key} is not available in redis;
        // }
    }

    async getTtl(key: string) {
        const result = await this.redisClient.ttl(key);
        if (result > 0) {
            return result;
        } else {
            return `${key} is not available in redis1`;
        }
    }

    async deleteKey(key: string) {
        await this.redisClient.del(key);
        return `${key} is deleted from redis`;
    }

    async setHashValue(
        hashkey: string,
        field: string,
        value: any,
        ispermanent: boolean,
        time?: number,
    ) {
        const result = await this.redisClient.hset(
            hashkey,
            field.toLowerCase(),
            value,
        );
        if (result == 1) {
            (await ispermanent) ? '' : this.redisClient.expire(hashkey, time);
            return `${hashkey} with hash value is stored in redis`;
        }
        return `${field} is already present in redis`;
    }

    async getHashValue(hashkey: string, field: string) {
        return await this.redisClient.hget(hashkey, field.toLowerCase());
    }

    async deleteKeyFromHash(hashKey: string, field: string) {
        return await this.redisClient.hdel(hashKey, field.toLowerCase());
    }
}