import { Data } from '@/types'
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Types, Schema as MongooseSchema } from 'mongoose'
export type PlayerDocument = Player & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Player {
    _id: string

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: Data.SchemaName.USER,
    })
    user: Types.ObjectId
}

const PlayerSchema = SchemaFactory.createForClass(Player)

PlayerSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { PlayerSchema }
