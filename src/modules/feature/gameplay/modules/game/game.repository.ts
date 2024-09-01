import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Types
import { Data } from '@/types/data'

// Schema
import { GameDocument } from './schema'

@Injectable()
export class GameRepository extends MongoRepository<GameDocument> {
    constructor(
        @InjectModel(Data.SchemaName.GAME, Data.DatabaseName.GAMEPLAY)
        GameModel: Model<GameDocument>,
    ) {
        super(GameModel)
    }
}
