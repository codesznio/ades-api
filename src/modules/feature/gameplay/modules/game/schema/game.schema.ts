import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema()
export class Game extends Document {
    _id: string

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Player' }], default: [] })
    players: Types.ObjectId[]

    @Prop({ default: 'waiting' })
    status: 'waiting' | 'started' | 'ended'
}

export const GameSchema = SchemaFactory.createForClass(Game)
