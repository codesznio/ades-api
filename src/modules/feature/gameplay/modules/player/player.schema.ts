import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type PlayerDocument = Player & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
    collection: 'logs',
})
export class Player {
    _id: string
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
