export const DatabaseName = {
    PLAYERS: 'PLAYERS',
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
