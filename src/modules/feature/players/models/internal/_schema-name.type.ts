export const SchemaName = {
    PLAYER: 'PLAYER',
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
