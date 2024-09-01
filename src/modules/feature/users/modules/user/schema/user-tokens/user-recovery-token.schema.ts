import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class UserRecoveryToken {
    @Prop({ type: String })
    token: string

    @Prop({ type: Date })
    expiry: Date

    @Prop({ type: Date })
    message_sent: Date
}

export const UserRecoverySchema = SchemaFactory.createForClass(UserRecoveryToken)
