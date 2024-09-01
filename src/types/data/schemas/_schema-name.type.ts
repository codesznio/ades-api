import { Gameplay } from '@/modules/feature/gameplay/models'

export const SchemaName = {
    ...Gameplay.Internal.SchemaName,
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
