import { ConflictException, Injectable } from '@nestjs/common'

// Services
import { AuthenticationSharedService } from '@/modules/feature/authentication/modules/authentication-shared/authentication-shared.service'
import { Authentication } from '@/modules/feature/authentication/models'

@Injectable()
export class AuthenticationWithEmailService extends AuthenticationSharedService {
    async login(): Promise<null> {
        return null
    }

    async register(dto: Authentication.Api.RegisterWithEmailParams): Promise<Authentication.Api.Tokens> {
        const exists = await this._userService.retrieve.byEmail(dto.email)

        if (exists) {
            throw new ConflictException({
                message: 'register_form.default',
                details: [],
            })
        }

        const user = await this._userService.register.withEmail(dto)

        if (!user) {
            throw new ConflictException({
                message: 'register_form.default',
                details: [],
            })
        }

        const player = await this._playerService.create({ user: user._id })

        if (!player) {
            throw new ConflictException({
                message: 'register_form.default',
                details: [],
            })
        }

        const tokens = await this.generateAuthenticationTokens(player, user)

        return tokens
    }
}
