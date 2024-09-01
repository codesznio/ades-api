import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Types
import { Data } from '@/types'

// Schema
import { PlayerSchema } from './player.schema'
import { PlayerFactory } from './player.factory'
import { PlayerService } from './player.service'
import { PlayerRepository } from './player.repository'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Data.SchemaName.PLAYER, schema: PlayerSchema }], Data.DatabaseName.PLAYERS),
    ],
    providers: [PlayerFactory, PlayerService, PlayerRepository],
    exports: [PlayerService],
})
export class PlayerModule {}
