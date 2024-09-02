import { GameQueenInterface } from './game-queen.interface'

export interface PlayerState {
    id
    lives: number
    queens: GameQueenInterface[]
    seat: number
    config: {
        bank: number
        eliminated: boolean
        time: number
        ready: boolean
    }
    stats: {
        blocks: number
        reversals: number
    }
}
