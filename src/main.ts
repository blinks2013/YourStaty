import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { HttpExceptionWrapper } from './utils/error/error.http.wrapper';
import { errorName } from './constants/error';
import { ValidationError } from 'class-validator';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Getting configuration for app server
    const configService = app.get(ConfigService);
    const env: string = configService.get('app.env')!;
    const host: string = configService.get('app.http.host')!;
    const port: number = configService.get('app.http.port')!;
    const versioning: boolean = configService.get('app.versioning.on')!;
    const globalPrefix: string = configService.get('app.globalPrefix')!;

    // Setting environment in NODE_ENV
    process.env.NODE_ENV = env;

    // Setting validation pipe for DTO
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            exceptionFactory: (validationErrors: any) => {
                return new HttpExceptionWrapper(
                    errorName.DATA_VALIDATION_ERROR,
                    validationErrors.map((error: any) => ({
                        field: error?.property,
                        error: Object.values(error.constraints).join(', '),
                    })),
                );
            },
        }),
    );

    // Setting logger for logging info and error
    const logger = new Logger();

    // Setting global prefix for api end point
    app.setGlobalPrefix(globalPrefix);

    // Setting versioning for API
    if (versioning) {
        app.enableVersioning({
            type: VersioningType.URI,
            defaultVersion: ['1'],
            prefix: configService.get('app.versioning.prefix'),
        });
    }

    // Starting server at given port and host id
    await app.listen(port, host);

    logger.log(`App Environment is ${env}`, 'App');
    logger.log(`App Versioning is ${versioning}`, 'App');
    logger.log(`Server running on ${await app.getUrl()}`, 'App');
}
bootstrap();
