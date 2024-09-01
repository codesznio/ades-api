import { Injectable } from '@nestjs/common'
import { Player } from './player.schema'
import { Players } from '../../models'
import { Types } from 'mongoose'

@Injectable()
export class PlayerFactory {
    create(dto: Players.CreatePlayerParams): Player {
        const player = new Player()

        player.user = dto.user as unknown as Types.ObjectId

        return player
    }
}
