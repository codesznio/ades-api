export const GameStatus = {
    WAITING: 'WAITING',
    STARTED: 'STARTED',
    COMPLETED: 'COMPLETED',
} as const

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]
