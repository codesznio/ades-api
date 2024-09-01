import { Authentication } from '@/modules/feature/authentication/models'
import { Gameplay } from '@/modules/feature/gameplay/models'
import { Players } from '@/modules/feature/players/models'
import { Users } from '@/modules/feature/users/models'

export const SchemaName = {
    ...Authentication.Internal.SchemaName,
    ...Gameplay.Internal.SchemaName,
    ...Players.Internal.SchemaName,
    ...Users.Internal.SchemaName,
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
