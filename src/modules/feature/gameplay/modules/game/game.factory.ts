import { Injectable } from '@nestjs/common'

// Schema
import { Game } from './schema'
import { GameCounterService } from '../game-counter/game-counter.service'

@Injectable()
export class GameFactory {
    constructor(private readonly _gameCounterService: GameCounterService) {}

    async create(): Promise<Game> {
        const game = new Game()

        game.count = await this._gameCounterService.increment()
        game.dates = {
            created: new Date(),
            filled: null,
            completed: null,
        }
        game.players = []

        return game
    }
}
