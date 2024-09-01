export const SchemaName = {
    GAME: 'GAME',
    PLAYER: 'PLAYER',
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
