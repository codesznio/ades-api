import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

// Types
import { Authentication } from '@/modules/feature/authentication/models'

// Schemas
import { UserEmailProvider, UserEmailProviderSchema } from './user-email-provider.schema'

@Schema()
export class UserProviders {
    @Prop({ _id: false, type: UserEmailProviderSchema })
    email: UserEmailProvider

    @Prop({
        type: String,
        enum: Object.values(Authentication.Api.RegistrationType),
    })
    registered: Authentication.Api.RegistrationType
}

export const UserProvidersSchema = SchemaFactory.createForClass(UserProviders)
