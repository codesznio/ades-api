import { Authentication } from '@/modules/feature/authentication/models'
import { Users } from '@/modules/feature/users/models'

export const WebsocketName = {
    ...Authentication.Internal.WebsocketName,
    ...Users.Internal.WebsocketName,
} as const

export type WebsocketName = (typeof WebsocketName)[keyof typeof WebsocketName]
