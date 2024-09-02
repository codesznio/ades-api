import { Gameplay } from '../../../models'
import { PlayerState } from './game-player-state.interface'

export interface GameState {
    status: Gameplay.GameStatus
    deck: {
        top: string
        remaining: string[]
        played: string[] // This needs to be in order of what was played
    }
    pending: string[] // List of players with their seat and lives
    seated: PlayerState[]
    current: number
    dealer: number
    round: number
}
