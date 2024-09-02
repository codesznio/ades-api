import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schemas
import { GameCounterSchema } from './game-counter.schema'
import { GameCounterRepository } from './game-counter.repository'
import { GameCounterService } from './game-counter.service'
import { Data } from '@/types'

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: Data.SchemaName.GAME_COUNTER, schema: GameCounterSchema }],
            Data.DatabaseName.GAMEPLAY,
        ),
    ],
    providers: [GameCounterRepository, GameCounterService],
    exports: [GameCounterService],
})
export class GameCounterModule {}
