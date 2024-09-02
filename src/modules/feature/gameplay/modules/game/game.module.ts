import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { Data } from '@/types'

// Service
import { GameSchema } from './schema'
import { GameFactory } from './game.factory'
import { GameRepository } from './game.repository'
import { GameService } from './game.service'
import { GameGateway } from './gateway'

// Modules
import { GameCounterModule } from '../game-counter'
import { GameController } from './game.controller'
import { PlayerModule } from '@/modules/feature/players/modules'
import { UserModule } from '@/modules/feature/users/modules'
import { JwtModule } from '@/modules/feature/authentication/modules'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Data.SchemaName.GAME, schema: GameSchema }], Data.DatabaseName.GAMEPLAY),
        GameCounterModule,
        JwtModule,
        PlayerModule,
        UserModule,
    ],
    controllers: [GameController],
    providers: [GameFactory, GameRepository, GameService, GameGateway],
    exports: [GameService],
})
export class GameModule {}
