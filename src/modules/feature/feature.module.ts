import { Module } from '@nestjs/common'

// Modules
import { AuthenticationModule } from './authentication'
import { GameplayModule } from './gameplay'
import { PlayersModule } from './players'
import { UsersModule } from './users'

@Module({
    imports: [AuthenticationModule, GameplayModule, PlayersModule, UsersModule],
})
export class FeatureModule {}
