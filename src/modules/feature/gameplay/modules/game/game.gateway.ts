import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server } from 'socket.io'

@WebSocketGateway({
    namespace: 'game',
    cors: {
        origin: '*', // Adjust based on your security needs
    },
})
export class GameGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server

    afterInit() {}
    handleConnection() {}
    handleDisconnect() {}
}
