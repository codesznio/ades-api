export const Success = {
    TOKENS_GENERATED: 'TOKENS_GENERATED',
} as const

export type Success = (typeof Success)[keyof typeof Success]
