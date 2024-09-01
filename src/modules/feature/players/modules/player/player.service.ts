import { Injectable } from '@nestjs/common'

// Player
import { Player } from './player.schema'
import { PlayerFactory } from './player.factory'
import { PlayerRepository } from './player.repository'

@Injectable()
export class PlayerService {
    constructor(
        private readonly _factory: PlayerFactory,
        private readonly _repository: PlayerRepository,
    ) {}

    get retrieve() {
        return {
            byId: (id: string): Promise<Player | null> => {
                return this._repository.retrieve(id)
            },
        }
    }
}
