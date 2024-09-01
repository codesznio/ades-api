import { Injectable } from '@nestjs/common'

// Game
import { GameCounterRepository } from './game-counter.repository'

@Injectable()
export class GameCounterService {
    constructor(private _repository: GameCounterRepository) {}

    async increment(name = 'game_counter'): Promise<number> {
        const sequenceDocument = await this._repository.upsert({ name }, { $inc: { seq: 1 } })

        return sequenceDocument.seq
    }
}
