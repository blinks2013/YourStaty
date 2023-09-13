import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from 'src/module/example/user.module';

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                UserModule,
                RouterModule.register([
                    {
                        path: 'users',
                        module: UserModule,
                    },
                ]),
            ],
        };
    }
}
