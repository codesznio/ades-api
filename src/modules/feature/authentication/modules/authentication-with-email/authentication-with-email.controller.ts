import { Body, Controller, Post } from '@nestjs/common'

// Types
import { Api } from '@/types'

// Service
import { AuthenticationWithEmailService } from './authentication-with-email.service'
import { Authentication } from '../../models'

@Controller('authentication/email')
export class AuthenticationWithEmailController {
    constructor(private readonly _authenticationWithEmailService: AuthenticationWithEmailService) {}

    @Post('/register')
    async register(
        @Body() dto: Authentication.Api.RegisterWithEmailParams,
    ): Promise<Api.Response<Authentication.Api.Tokens>> {
        const data = await this._authenticationWithEmailService.register(dto)

        return {
            data,
            success: true,
        }
    }

    @Post('/login')
    async login(): Promise<Api.Response<null>> {
        const data = await this._authenticationWithEmailService.login()

        return {
            data,
            success: true,
        }
    }
}
