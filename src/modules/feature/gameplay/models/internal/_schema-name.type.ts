export const SchemaName = {
    GAME: 'GAME',
    PLAYER: 'PLAYER',
    GAME_COUNTER: 'GAME_COUNTER',
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
