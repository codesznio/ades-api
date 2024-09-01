import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Providers
import { UserProviders, UserProvidersSchema } from './user-providers'
import { UserTokens, UserTokensSchema } from './user-tokens'

export type UserDocument = User & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class User {
    _id: string

    @Prop({ _id: false, type: UserProvidersSchema })
    providers: UserProviders

    @Prop({ _id: false, type: UserTokensSchema })
    tokens: UserTokens
}

const UserSchema = SchemaFactory.createForClass(User)

UserSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { UserSchema }
