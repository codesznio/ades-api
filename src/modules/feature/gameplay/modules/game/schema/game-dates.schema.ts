import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class GameDates {
    @Prop({ type: Date })
    created: Date

    @Prop({ type: Date })
    filled: Date

    @Prop({ type: Date })
    completed: Date
}

export const GameDatesSchema = SchemaFactory.createForClass(GameDates)
