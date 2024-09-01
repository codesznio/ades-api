import { Injectable } from '@nestjs/common'

// Schema
import { Player } from './player.schema'

@Injectable()
export class PlayerFactory {
    create(): Player {
        const player = new Player()

        return player
    }
}
