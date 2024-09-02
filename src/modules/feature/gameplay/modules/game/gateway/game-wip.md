import {
WebSocketGateway,
WebSocketServer,
OnGatewayInit,
OnGatewayConnection,
OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

import { JwtService } from '@/modules/feature/authentication/modules'
import { PlayerService } from '@/modules/feature/players/modules/player/player.service'
import { GameService } from '../game.service'

import { GameState } from './game-state.interface'
import { Gameplay } from '../../../models'
// import { Gameplay } from '../../../models'

@WebSocketGateway({
namespace: /\/games\/\w+/,
cors: {
origin: '\*', // Adjust based on your security needs
},
})
export class GameGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
@WebSocketServer() server: Server

    private game: Map<string, GameState> = new Map()

    constructor(
        private readonly _jwtService: JwtService,
        private readonly _playerService: PlayerService,
        private readonly _gameService: GameService,
    ) {}

    afterInit() {
        console.log('COnnected')
    }

    async handleConnection(client: Socket) {
        // const authHeader = client.handshake?.headers?.authorization
        // if (!authHeader || !authHeader.startsWith('Bearer ')) {
        //     client.disconnect()
        //     console.log('Disconnected due to missing or invalid authorization header')
        //     return
        // }
        // const token = authHeader.split(' ')[1]
        // try {
        //     const payload = await this._jwtService.verifyToken(token)
        //     const id = client.nsp.name.split('/').pop()
        //     console.log('fuck', id)
        //     if (!id) {
        //         client.disconnect()
        //         console.log('Disconnected due to missing game ID in namespace')
        //         return
        //     }
        //     const [player, game] = await Promise.all([
        //         this._playerService.retrieve.byId(payload.player),
        //         this._gameService.retrieve.byId(id),
        //     ])
        //     // Optionally store only the necessary references
        //     client.data.player = player._id
        //     client.data.game = id
        //     const state = this.game.get(id) || this._initialize(id)
        //     this.server.to(`/games/${id}`).emit('player_connected', { game, player })
        //     this.game.set(id, { ...state, pending: game.players as unknown as string[] })
        //     this.server.to(id).emit('player_connected', { game, player })
        //     console.log(state.pending.length)
        //     if (state.pending.length === 4) {
        //         this._prepare(id)
        //     }
        // Emit to the specific namespace for the game
        // const id = client.nsp.name.split('/').pop()
        // console.log(`Emitting player_connected event to game ${id}`)
        // this.server.to(`/games/${id}`).emit('player_connected')
        // } catch (error) {
        //     // console.error(error)
        //     // client.disconnect()
        // }
    }

    handleDisconnect() {
        /**
         * TODO:
         * Handle disconnect in game
         * Handle disconnect post game
         */
    }

    // Base State
    // private _initialize(id: string): GameState {
    //     const initialGameState: GameState = {
    //         status: 'WAITING',
    //         deck: {
    //             top: '',
    //             remaining: [],
    //             played: [],
    //         },
    //         pending: [],
    //         seated: [],
    //         current: null,
    //         dealer: null,
    //         round: null,
    //     }

    //     this.game.set(id, initialGameState)

    //     return initialGameState
    // }

    // // All players in we begin to prepare the game
    // private async _prepare(id: string) {
    //     const state = this.game.get(id)

    //     if (!state) return

    //     const game = await this._gameService.update.status(id, Gameplay.GameStatus.SETUP)

    //     state.status = game.status

    //     // Seat players and assign a dealer
    //     const seatedPlayers = this.setup.seatPlayers(state.pending)
    //     const dealer = this.setup.seatDealer(seatedPlayers.length)

    //     state.seated = seatedPlayers
    //     state.dealer = dealer
    //     state.current = (dealer + 1) % seatedPlayers.length // Player to the left of the dealer
    //     state.round = 1

    //     this.server.to(`/games/${id}`).emit('game_setup', { seatedPlayers, dealer })

    //     this._pregame(id)
    // }

    // private async _pregame(id: string) {
    //     const state = this.game.get(id)

    //     if (!state) return

    //     const game = await this._gameService.update.status(id, Gameplay.GameStatus.PREGAME)

    //     state.status = game.status

    //     this.server.to(`/games/${id}`).emit('pregame_start', { countdown: 30 })

    //     let countdown = 30

    //     const countdownInterval = setInterval(() => {
    //         countdown -= 1
    //         this.server.to(`/games/${id}`).emit('countdown_tick', { countdown })

    //         if (countdown === 0 || state.seated.every((player) => player.config.ready)) {
    //             clearInterval(countdownInterval)
    //             this._running(id)
    //         }
    //     }, 1000)
    // }

    // private async _running(id: string) {
    //     const state = this.game.get(id)

    //     if (!state) return

    //     const game = await this._gameService.update.status(id, Gameplay.GameStatus.RUNNING)

    //     state.status = game.status
    //     this.server.to(`/games/${id}`).emit('game_running')

    //     // TODO: Start
    // }

    // private get deck() {
    //     return {
    //         shuffle: <T>(array: T[]): T[] => {
    //             for (let i = array.length - 1; i > 0; i--) {
    //                 const j = Math.floor(Math.random() * (i + 1))

    //                 ;[array[i], array[j]] = [array[j], array[i]]
    //             }

    //             return array
    //         },
    //     }
    // }

    // private get setup() {
    //     return {
    //         seatPlayers: (players: string[]) => {
    //             const seats: number[] = this.deck.shuffle([1, 2, 3, 4])

    //             return players.map((id, index) => ({
    //                 id,
    //                 lives: 10,
    //                 queens: [],
    //                 seat: seats[index],
    //                 config: {
    //                     bank: 0,
    //                     eliminated: false,
    //                     time: 30,
    //                     ready: false,
    //                 },
    //                 stats: {
    //                     blocks: 0,
    //                     reversals: 0,
    //                 },
    //             }))
    //         },
    //         seatDealer: (numPlayers: number) => {
    //             return Math.floor(Math.random() * numPlayers)
    //         },
    //     }
    // }

}
