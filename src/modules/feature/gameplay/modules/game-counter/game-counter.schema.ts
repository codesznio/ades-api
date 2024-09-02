import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type GameCounterDocument = GameCounter & Document

@Schema({
    timestamps: true,
    versionKey: false,
    collection: 'game-counter',
})
export class GameCounter {
    _id: string

    @Prop({ type: String, lowercase: true, unique: true, required: true })
    name: string

    @Prop({ required: true })
    seq: number
}

const GameCounterSchema = SchemaFactory.createForClass(GameCounter)

GameCounterSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt

        return doc
    },
})

export { GameCounterSchema }
