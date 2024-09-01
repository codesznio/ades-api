import { Authentication } from '@/modules/feature/authentication/models'

export const Success = {
    ...Authentication.Event.Success,
    ERROR_CREATED: 'ERROR_CREATED',
} as const

export type Success = (typeof Success)[keyof typeof Success]
