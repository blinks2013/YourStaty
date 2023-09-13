import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { AppController } from './app.controller';
import { AppRouterModule } from './app.router';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [CoreModule, AppRouterModule.register()],
    controllers: [AppController],
})
export class AppModule {}
