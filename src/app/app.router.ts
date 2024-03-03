import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { PropertyModule } from 'src/module/property/property.module';
import { UserModule } from 'src/module/user/user.module';

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                UserModule,
                PropertyModule,
                RouterModule.register([
                    {
                        path: 'users',
                        module: UserModule,
                    },{
                        path:'property',
                        module: PropertyModule
                    }
                ]),
            ],
        };
    }
}
