import { Authentication } from '@/modules/feature/authentication/models'

export const Action = {
    ...Authentication.Event.Action,
} as const

export type Action = (typeof Action)[keyof typeof Action]
