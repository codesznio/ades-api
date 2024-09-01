import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { GameCounterDocument } from './game-counter.schema'
import { Data } from '@/types'

@Injectable()
export class GameCounterRepository extends MongoRepository<GameCounterDocument> {
    constructor(
        @InjectModel(Data.SchemaName.GAME_COUNTER, Data.DatabaseName.GAMEPLAY)
        GameCounterModel: Model<GameCounterDocument>,
    ) {
        super(GameCounterModel)
    }
}
