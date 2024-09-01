import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
} from '@nestjs/websockets'
import { Server } from 'socket.io'
import { GameService } from './game.service'

@WebSocketGateway({
    namespace: 'game',
    cors: {
        origin: '*', // Adjust based on your security needs
    },
})
export class GameGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server

    constructor(private readonly _gameService: GameService) {}

    afterInit() {}
    handleConnection() {
        console.log('Connected Nigga')
    }
    handleDisconnect() {}

    @SubscribeMessage('join_game')
    async handleJoinGame() {
        const game = await this._gameService.retrieve.available('66d3faf76df599fbaedbad67')

        console.log(game)

        // if (!game) {
        //     let created = await this._gameService.create()

        //     if (created) {
        //         created = await this._gameService.update.join(created._id, '66d3faf76df599fbaedbad67')
        //     }

        //     console.log(created)
        // } else {
        // }

        this.server.to(game._id).emit('player_joined', { player: { name: 'fuck' } })

        // // Verify that the player is authorized to join the game
        // const game = await this.gameService.retrieve.byId(gameId)
        // if (!game || !game.players.includes(client.data.user.id)) {
        //     client.emit('error', 'Unauthorized')
        //     return client.disconnect()
        // }

        // // Proceed to add the player to the WebSocket room
        // await this.gameService.update.join(gameId, playerId)

        // client.join(gameId) // Player joins the WebSocket room specific to the game

        // this.server.to(gameId).emit('playerJoined', { playerId })

        // if (game.action === Gameplay.GameStatus.ACTIVE) {
        //     this.server.to(gameId).emit('gameStarted', game)
        // }
    }
}
