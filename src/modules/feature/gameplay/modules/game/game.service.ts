import { Injectable } from '@nestjs/common'

// User Log
import { GameFactory } from './game.factory'
import { GameRepository } from './game.repository'

@Injectable()
export class GameService {
    constructor(
        private readonly _factory: GameFactory,
        private readonly _repository: GameRepository,
    ) {}
}
