import { Injectable } from '@nestjs/common'

// User Log
import { GameFactory } from './game.factory'
import { GameRepository } from './game.repository'
import { Game } from './schema'

@Injectable()
export class GameService {
    constructor(
        private readonly _factory: GameFactory,
        private readonly _repository: GameRepository,
    ) {}

    async create(): Promise<Game> {
        try {
            const candidate = await this._factory.create()

            return this._repository.create(candidate)
        } catch (err) {}
    }

    get retrieve() {
        return {
            available: async (id: string): Promise<Game | null> => {
                const available = await this._repository.findOne({
                    status: 'WAITING',
                    $expr: { $lt: [{ $size: '$players' }, 4] },
                    players: { $nin: [id] }, // Ensure the player's ID is not in the players array
                })

                console.log(available)

                return available
            },
            byId: (id: string): Promise<Game | null> => {
                return this._repository.retrieve(id)
            },
        }
    }

    get update() {
        return {
            join: (game: string, player: string): Promise<Game> => {
                return this._repository.update(game, {
                    $addToSet: { players: player },
                })
            },
        }
    }
}
