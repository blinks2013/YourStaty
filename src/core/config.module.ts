import { ConfigModule } from '@nestjs/config';
import Configs from 'src/config';

export default (() => {
    const mode = process.env.NODE_ENV;

    if (mode == 'production') {
        return ConfigModule.forRoot({
            load: Configs,
            isGlobal: true,
            cache: true,
            ignoreEnvFile: false,
            envFilePath: ['.env'],
        });
    } else if (mode == 'staging') {
        return ConfigModule.forRoot({
            load: Configs,
            isGlobal: true,
            cache: true,
            ignoreEnvFile: false,
            envFilePath: ['.env.staging'],
        });
    } else {
        return ConfigModule.forRoot({
            load: Configs,
            isGlobal: true,
            cache: true,
            ignoreEnvFile: false,
            envFilePath: ['.env.development'],
        });
    }
})();
