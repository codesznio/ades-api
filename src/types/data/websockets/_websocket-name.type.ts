import { Authentication } from '@/modules/feature/authentication/models'
import { Gameplay } from '@/modules/feature/gameplay/models'
import { Players } from '@/modules/feature/players/models'
import { Users } from '@/modules/feature/users/models'

export const WebsocketName = {
    ...Authentication.Internal.WebsocketName,
    ...Gameplay.Internal.WebsocketName,
    ...Players.Internal.WebsocketName,
    ...Users.Internal.WebsocketName,
} as const

export type WebsocketName = (typeof WebsocketName)[keyof typeof WebsocketName]
