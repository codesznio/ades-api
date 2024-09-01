import { PassportStrategy } from '@nestjs/passport'
import { ForbiddenException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Request } from 'express'

// Types
import { Authentication } from '@/modules/feature/authentication/models'

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(protected readonly config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('authentication.jwt_refresh'),
            passReqToCallback: true,
        })
    }

    validate(req: Request, payload: Authentication.Api.JwtPayload): Authentication.Api.RefreshPayload {
        const refresh = req?.get('authorization')?.replace('Bearer', '').trim()

        if (!refresh) {
            throw new ForbiddenException('Refresh token malformed')
        }

        return {
            ...payload,
            refresh,
        }
    }
}
