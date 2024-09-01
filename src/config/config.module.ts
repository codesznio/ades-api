import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

// Configs
import { appConfig } from './app/_app.config'

// Configs
import { authenticationConfig } from '@/modules/feature/authentication/authentication.config'
import { gameplayConfig } from '@/modules/feature/gameplay/gameplay.config'
import { playersConfig } from '@/modules/feature/players/players.config'
import { usersConfig } from '@/modules/feature/users/users.config'

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, authenticationConfig, gameplayConfig, playersConfig, usersConfig],
        }),
    ],
})
export class ConfigModule {}
