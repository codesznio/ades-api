import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Types
import { Event } from '@/types'

// Service
import { UserService } from './user.service'
import { Authentication } from '@/modules/feature/authentication/models'

@Injectable()
export class UserListener {
    constructor(private readonly _service: UserService) {}

    @OnEvent(Event.Success.TOKENS_GENERATED)
    newTokens({ user, tokens }: Authentication.Payload.TokensGenerated): void {
        this._service.update.refreshToken(user._id, tokens.refresh)
    }
}
