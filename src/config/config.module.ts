import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

// Configs
import { appConfig } from './app/_app.config'
import { gameplayConfig } from '@/modules/feature/gameplay/gameplay.config'

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, gameplayConfig],
        }),
    ],
})
export class ConfigModule {}
