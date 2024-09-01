import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class UserEmailProvider {
    @Prop({ isRequired: true, unique: true, trim: true, lowercase: true, type: String })
    email: string

    @Prop({ isRequired: true, type: String })
    password: string

    @Prop({ type: Boolean, default: false })
    verified: boolean
}

export const UserEmailProviderSchema = SchemaFactory.createForClass(UserEmailProvider)
