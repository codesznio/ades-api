import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { JwtService as NestJWTService } from '@nestjs/jwt'

// Schemas
import { User } from '@/modules/feature/users/modules/user/schema'
import { Player } from '@/modules/feature/players/modules/player/player.schema'

// Types
import { Authentication } from '@/modules/feature/authentication/models'

@Injectable()
export class JwtService {
    constructor(
        private readonly config: ConfigService,
        private readonly _nestJWTService: NestJWTService,
    ) {}

    private _signToken(payload: Authentication.Api.JwtPayload, refresh: boolean): Promise<string> {
        return this._nestJWTService.signAsync(payload, {
            secret: refresh
                ? this.config.get<string>('authentication.jwt_refresh')
                : this.config.get<string>('authentication.jwt_access'),
            // expiresIn: refresh ? '7d' : '10m',
            expiresIn: refresh ? '7d' : '1d',
            issuer: this.config.get<string>('authentication.jwt_issuer'),
        })
    }

    public async buildTokens(player: Player, user: User): Promise<{ access: string; refresh: string }> {
        const [access, refresh] = await Promise.all([
            this._signToken(
                {
                    player: player._id.toString(),
                    user: user._id.toString(),
                },
                false,
            ),
            this._signToken(
                {
                    player: player._id.toString(),
                    user: user._id.toString(),
                },
                true,
            ),
        ])

        return { access, refresh }
    }

    public async verifyToken(token: string): Promise<Authentication.Api.JwtPayload> {
        try {
            const secret = this.config.get<string>('authentication.jwt_access')

            return await this._nestJWTService.verifyAsync(token, { secret })
        } catch (error) {
            console.error('Token verification failed:', error)
            throw error
        }
    }
}
