import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { GameService } from './game.service'
import { AuthorizationGuard, GetPayload } from '@/common'
import { Authentication } from '@/modules/feature/authentication/models'
import { Api } from '@/types'
import { Game } from './schema'

@Controller('games')
export class GameController {
    constructor(private readonly _gameService: GameService) {}

    @UseGuards(AuthorizationGuard)
    @Post('join')
    async available(@GetPayload() payload: Authentication.Api.JwtPayload): Promise<Api.Response<Game>> {
        const data = await this._gameService.joinGame(payload)

        return {
            data,
            success: true,
        }
    }
}
