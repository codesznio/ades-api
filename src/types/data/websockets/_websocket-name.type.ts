import { Gameplay } from '@/modules/feature/gameplay/models'

export const WebsocketName = {
    ...Gameplay.Internal.WebsocketName,
} as const

export type WebsocketName = (typeof WebsocketName)[keyof typeof WebsocketName]
