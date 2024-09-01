import { AuthenticationDatabaseProviderModule } from '@/modules/feature/authentication/authentication.provider'
import { GameplayDatabaseProviderModule } from '@/modules/feature/gameplay/gameplay.provider'
import { PlayersDatabaseProviderModule } from '@/modules/feature/players/players.provider'
import { UsersDatabaseProviderModule } from '@/modules/feature/users/users.provider'
import { Module } from '@nestjs/common'

@Module({
    imports: [
        AuthenticationDatabaseProviderModule,
        GameplayDatabaseProviderModule,
        PlayersDatabaseProviderModule,
        UsersDatabaseProviderModule,
    ],
})
export class MongoDatabaseProviderModule {}
