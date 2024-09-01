import { BadRequestException, ConflictException, Injectable } from '@nestjs/common'

// Services
import { AuthenticationSharedService } from '@/modules/feature/authentication/modules/authentication-shared/authentication-shared.service'
import { Authentication } from '@/modules/feature/authentication/models'

@Injectable()
export class AuthenticationWithEmailService extends AuthenticationSharedService {
    async login(dto: Authentication.Api.LoginWithEmailParams): Promise<Authentication.Api.Tokens> {
        const user = await this._userService.retrieve.byEmail(dto.email)

        if (!user) {
            throw new ConflictException({
                message: 'register_form.default',
                details: [],
            })
        }

        const isValid = this._stringEncryptor.compare(dto.password, user.providers.email.password)

        if (!isValid) {
            throw new BadRequestException('login_form.default')
        }

        const player = await this._playerService.retrieve.byUserId(user._id)

        if (!user) {
            throw new ConflictException({
                message: 'register_form.default',
                details: [],
            })
        }

        try {
            const tokens = await this._jwtService.buildTokens(player, user)

            return tokens
        } catch (err) {
            throw new ConflictException({
                message: 'register_form.default',
                details: [],
            })
        }
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
