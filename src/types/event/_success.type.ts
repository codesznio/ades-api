export const Success = {
    ERROR_CREATED: 'ERROR_CREATED',
} as const

export type Success = (typeof Success)[keyof typeof Success]
