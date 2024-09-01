import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Types
import { Data } from '@/types/data'

// Schema
import { UserDocument } from './schema/user.schema'

@Injectable()
export class UserRepository extends MongoRepository<UserDocument> {
    constructor(@InjectModel(Data.SchemaName.USER, Data.DatabaseName.USERS) userModel: Model<UserDocument>) {
        super(userModel)
    }
}
