import { Module } from '@nestjs/common'

// Modules
import { GameModule, PlayerModule } from './modules'

@Module({
    imports: [GameModule, PlayerModule],
})
export class GameplayModule {}
