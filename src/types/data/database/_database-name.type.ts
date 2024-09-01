import { Gameplay } from '@/modules/feature/gameplay/models'

export const DatabaseName = {
    ...Gameplay.Internal.DatabaseName,
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
