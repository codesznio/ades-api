import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { GameService } from './game.service'

@WebSocketGateway({ namespace: '/game' })
export class GameGateway {
    @WebSocketServer()
    server: Server

    constructor(private readonly _gameService: GameService) {}

    @SubscribeMessage('joinGame')
    async handleJoinGame(@MessageBody('playerId') playerId: string, @ConnectedSocket() client: Socket) {
        const room = await this._gameService.joinRoom(playerId)
        client.join(room.roomId)

        this.server.to(room.roomId).emit('player_joined', { playerId })

        if (room.status === 'started') {
            this.server.to(room.roomId).emit('game_started', room)
        }
    }
}
