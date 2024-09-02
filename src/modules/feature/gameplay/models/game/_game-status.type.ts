export const GameStatus = {
    WAITING: 'WAITING',
    SETUP: 'SETUP',
    PREGAME: 'PREGAME',
    RUNNING: 'RUNNING',
    COMPLETED: 'COMPLETED',
} as const

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]
