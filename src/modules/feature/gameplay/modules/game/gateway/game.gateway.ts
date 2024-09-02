import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

import { JwtService } from '@/modules/feature/authentication/modules'
import { PlayerService } from '@/modules/feature/players/modules/player/player.service'
import { GameService } from '../game.service'

@WebSocketGateway({
    namespace: /\/games\/\w+/,
    cors: {
        origin: '*', // Adjust based on your security needs
    },
})
export class GameGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server

    constructor(
        private readonly _jwtService: JwtService,
        private readonly _playerService: PlayerService,
        private readonly _gameService: GameService,
    ) {}

    afterInit() {
        console.log('WebSocket server initialized')
    }

    async handleConnection(@ConnectedSocket() client: Socket) {
        // Get game id and validate user
        const id = client.nsp.name.split('/').pop()
        const token = client.handshake.headers.authorization?.split(' ')[1]

        // console.log(token)

        // console.log(`Client connected to game namespace: ${gameId}`)
        // client.nsp.emit('player_connected', { player: true })
    }

    handleDisconnect(@ConnectedSocket() client: Socket) {
        const gameId = client.nsp.name.split('/').pop()
        console.log(`Client disconnected from game namespace: ${gameId}`)
    }
}
