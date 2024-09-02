export const SchemaName = {
    GAME: 'GAME',
    GAME_COUNTER: 'GAME_COUNTER',
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
