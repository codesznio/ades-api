import { Injectable } from '@nestjs/common'

// Schema
import { Game } from './schema'

@Injectable()
export class GameFactory {
    create(): Game {
        const game = new Game()

        return game
    }
}
