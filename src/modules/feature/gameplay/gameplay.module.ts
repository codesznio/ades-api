import { Module } from '@nestjs/common'

// Modules
import { GameModule } from './modules/game'

@Module({
    imports: [GameModule],
})
export class GameplayModule {}
