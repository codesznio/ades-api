import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Tokens
import { UserEmailVerification, UserEmailVerificationSchema } from './user-email-verification.schema'
import { UserJwtSchema, UserJwtToken } from './user-jwt-tokens.schema'
import { UserRecoverySchema, UserRecoveryToken } from './user-recovery-token.schema'

@Schema()
export class UserTokens {
    @Prop({ _id: false, type: UserEmailVerificationSchema })
    email: UserEmailVerification

    @Prop({ _id: false, type: UserJwtSchema })
    jwt: UserJwtToken

    @Prop({ _id: false, type: UserRecoverySchema })
    recovery: UserRecoveryToken
}

export const UserTokensSchema = SchemaFactory.createForClass(UserTokens)
