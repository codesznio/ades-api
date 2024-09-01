import { Authentication } from '@/modules/feature/authentication/models'
import { Users } from '@/modules/feature/users/models'

export const DatabaseName = {
    ...Authentication.Internal.DatabaseName,
    ...Users.Internal.DatabaseName,
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
