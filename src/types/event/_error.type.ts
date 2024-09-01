import { Authentication } from '@/modules/feature/authentication/models'

export const Error = {
    ...Authentication.Event.Error,
    SERVER_ERROR: 'SERVER_ERROR',
} as const

export type Error = (typeof Error)[keyof typeof Error]
