import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Types
import { Data } from '@/types'

// Schema
import { PlayerSchema } from './player.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Data.SchemaName.USER, schema: PlayerSchema }], Data.DatabaseName.USERS),
    ],
})
export class PlayerModule {}
