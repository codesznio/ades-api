import { Injectable } from '@nestjs/common'

// User Log
import { GameFactory } from './game.factory'
import { GameRepository } from './game.repository'
import { Game } from './schema'
import { Authentication } from '@/modules/feature/authentication/models'

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

    async joinGame(payload: Authentication.Api.JwtPayload): Promise<Game | null> {
        try {
            // Retrieve an available game or create a new one if none exists
            const game = (await this.retrieve.available(payload.player)) || (await this.create())

            // Update the game to add the player and return the updated game
            return await this.update.join(game._id, payload.player)
        } catch (err) {
            console.error('Error joining game:', err)

            return null // Return null or throw the error depending on your use case
        }
    }

    get retrieve() {
        return {
            available: async (id: string): Promise<Game | null> => {
                const available = await this._repository.findOne({
                    status: 'WAITING',
                    $expr: { $lt: [{ $size: '$players' }, 4] },
                    players: { $nin: [id] },
                })

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
            status: (game: string, status: string): Promise<Game> => {
                return this._repository.update(game, {
                    status,
                })
            },
        }
    }
}
