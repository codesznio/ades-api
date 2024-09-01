import { Data } from '@/types'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types, Schema as MongooseSchema } from 'mongoose'

// Types
import { Gameplay } from '@/gameplay/models'

@Schema()
export class Game extends Document {
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

export const GameSchema = SchemaFactory.createForClass(Game)
