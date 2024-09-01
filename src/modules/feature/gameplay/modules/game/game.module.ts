import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { Data } from '@/types'

// Service
import { GameSchema } from './schema'
import { GameFactory } from './game.factory'
import { GameRepository } from './game.repository'
import { GameService } from './game.service'
import { GameGateway } from './game.gateway'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Data.SchemaName.GAME, schema: GameSchema }], Data.DatabaseName.GAMEPLAY),
    ],
    providers: [GameFactory, GameRepository, GameService, GameGateway],
    exports: [GameService],
})
export class GameModule {}
