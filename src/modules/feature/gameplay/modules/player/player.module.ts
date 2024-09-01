import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { Data } from '@/types'

// Service
import { PlayerSchema } from './player.schema'
import { PlayerFactory } from './player.factory'
import { PlayerRepository } from './player.repository'
import { PlayerService } from './player.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Data.SchemaName.PLAYER, schema: PlayerSchema }], Data.DatabaseName.GAMEPLAY),
    ],
    providers: [PlayerFactory, PlayerRepository, PlayerService],
    exports: [PlayerService],
})
export class PlayerModule {}
