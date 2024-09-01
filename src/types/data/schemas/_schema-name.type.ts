import { Authentication } from '@/modules/feature/authentication/models'
import { Users } from '@/modules/feature/users/models'

export const SchemaName = {
    ...Authentication.Internal.SchemaName,
    ...Users.Internal.SchemaName,
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
