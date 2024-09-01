import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class UserEmailVerification {
    @Prop({ type: Number })
    code: number

    @Prop({ type: Date })
    expiry: Date

    @Prop({ type: Date })
    message_sent: Date

    @Prop({ type: String })
    token: string
}

export const UserEmailVerificationSchema = SchemaFactory.createForClass(UserEmailVerification)
