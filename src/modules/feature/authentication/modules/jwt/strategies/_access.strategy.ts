import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Strategy, ExtractJwt } from 'passport-jwt'

// Types
import { Authentication } from '@/modules/feature/authentication/models'

// Services
import { PlayerService } from '@/modules/feature/players/modules/player/player.service'
import { UserService } from '@/modules/feature/users/modules/user/user.service'

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        protected config: ConfigService,
        private readonly _playerService: PlayerService,
        private readonly _userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('authentication.jwt_access'),
        })
    }

    async validate(payload: Authentication.Api.JwtPayload) {
        const [user, player] = await Promise.all([
            this._userService.retrieve.byId(payload.user),
            this._playerService.retrieve.byId(payload.player),
        ])

        console.log(user, player)

        return {
            player: player._id,
            user: user._id,
        }
    }
}
