import { Controller, Get, Param } from '@nestjs/common'
import { GameService } from './game.service'

@Controller('games')
export class GameController {
    constructor(private readonly _gameService: GameService) {}

    @Get(':id')
    async getRoom(@Param('id') id: string) {
        return this._gameService.retrieve.byId(id)
    }
}
