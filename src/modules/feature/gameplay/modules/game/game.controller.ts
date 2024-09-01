import { Controller, Get, Param } from '@nestjs/common'
import { GameService } from './game.service'

@Controller('games')
export class GameController {
    constructor(private readonly _gameService: GameService) {}

    @Get('available')
    async available() {
        return await this._gameService.retrieve.available('66d3faf76df599fbaedbad68')
    }

    @Get(':id')
    async getRoom(@Param('id') id: string) {
        return this._gameService.retrieve.byId(id)
    }
}
