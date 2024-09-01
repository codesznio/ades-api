import { Injectable } from '@nestjs/common'

// Player
import { Player } from './player.schema'
import { PlayerFactory } from './player.factory'
import { PlayerRepository } from './player.repository'

import { Players } from '../../models'

@Injectable()
export class PlayerService {
    constructor(
        private readonly _factory: PlayerFactory,
        private readonly _repository: PlayerRepository,
    ) {}

    async create(dto: Players.CreatePlayerParams): Promise<Player> {
        const candidate = this._factory.create(dto)

        return this._repository.create(candidate)
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Player | null> => {
                return this._repository.retrieve(id)
            },
            byUserId: (id: string): Promise<Player | null> => {
                return this._repository.findOne({ user: id })
            },
        }
    }
}
