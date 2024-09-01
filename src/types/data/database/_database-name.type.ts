import { Authentication } from '@/modules/feature/authentication/models'
import { Gameplay } from '@/modules/feature/gameplay/models'
import { Players } from '@/modules/feature/players/models'
import { Users } from '@/modules/feature/users/models'

export const DatabaseName = {
    ...Authentication.Internal.DatabaseName,
    ...Gameplay.Internal.DatabaseName,
    ...Players.Internal.DatabaseName,
    ...Users.Internal.DatabaseName,
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
