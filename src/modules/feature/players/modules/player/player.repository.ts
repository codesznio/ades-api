import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Types
import { Data } from '@/types/data'

// Schema
import { PlayerDocument } from './player.schema'

@Injectable()
export class PlayerRepository extends MongoRepository<PlayerDocument> {
    constructor(@InjectModel(Data.SchemaName.PLAYER, Data.DatabaseName.PLAYERS) playerModel: Model<PlayerDocument>) {
        super(playerModel)
    }
}
