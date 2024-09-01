import { Injectable } from '@nestjs/common'

// User Log
import { PlayerFactory } from './player.factory'
import { PlayerRepository } from './player.repository'

@Injectable()
export class PlayerService {
    constructor(
        private readonly _factory: PlayerFactory,
        private readonly _repository: PlayerRepository,
    ) {}
}
