import { BadRequestException, Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'

// Common
import { StringEncryptor } from '@/common'

// Services

import { PlayerService } from '@/modules/feature/players/modules/player/player.service'
import { JwtService } from '@/modules/feature/authentication/modules/jwt/jwt.service'
import { UserService } from '@/modules/feature/users/modules/user/user.service'

// Schema
import { Player } from '@/modules/feature/players/modules/player/player.schema'
import { User } from '@/modules/feature/users/modules/user/schema'

// Types
import { Authentication } from '@/modules/feature/authentication/models/'

import { Event } from '@/types'

@Injectable()
export class AuthenticationSharedService {
    constructor(
        protected readonly _eventEmitter: EventEmitter2,
        protected readonly _jwtService: JwtService,
        protected readonly _stringEncryptor: StringEncryptor,
        protected readonly _playerService: PlayerService,
        protected readonly _userService: UserService,
    ) {}

    protected async generateAuthenticationTokens(player: Player, user: User): Promise<Authentication.Api.Tokens> {
        try {
            const tokens = await this._jwtService.buildTokens(player, user)

            // Throw Token Event
            this._eventEmitter.emit(Event.Success.TOKENS_GENERATED, { user, tokens })

            return tokens
        } catch (err) {
            throw new BadRequestException({
                message: 'register_form.default',
                details: [],
            })
        }
    }
}
