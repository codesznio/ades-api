import { Data } from '@/types'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types, Schema as MongooseSchema } from 'mongoose'
import { Gameplay } from '../../../models'

export type GameDocument = Game & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Game {
    _id: string

    @Prop({
        type: [MongooseSchema.Types.ObjectId],
        ref: Data.SchemaName.PLAYER,
    })
    players: Types.ObjectId[]

    @Prop({
        type: String,
        enum: Object.values(Gameplay.GameStatus),
    })
    action: Gameplay.GameStatus
}

const GameSchema = SchemaFactory.createForClass(Game)

GameSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { GameSchema }
