import { Module } from '@nestjs/common'

// Modules
import { PlayerModule } from './modules'

@Module({
    imports: [PlayerModule],
})
export class PlayersModule {}
