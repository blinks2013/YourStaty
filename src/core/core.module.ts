import { Module } from '@nestjs/common';
import ConfigModule from './config.module';
import { ErrorModule } from 'src/utils/error/error.module';
import { WinstonModule } from 'nest-winston';
import { DebuggerService } from 'src/utils/debugger/debugger.service';
import { DebuggerModule } from 'src/utils/debugger/debugger.module';
import { DatabaseModule } from 'src/database/database.module';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [
        // Config setup for environment file and values
        ConfigModule,

        // Winston setup for logging
        WinstonModule.forRootAsync({
            inject: [DebuggerService],
            imports: [DebuggerModule],
            useFactory: (debuggerService: DebuggerService) =>
                debuggerService.createLogger(),
        }),

        // Error Module
        ErrorModule,

        // Database Modules
        DatabaseModule,

        // Pagination Modules
        PaginationModule,

        // ServiceGateway Module
        ServiceGatewayModule,
    ],
})
export class CoreModule {}
