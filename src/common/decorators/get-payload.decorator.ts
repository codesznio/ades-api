import { Authentication } from '@/modules/feature/authentication/models'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const GetPayload = createParamDecorator(
    (_: undefined, context: ExecutionContext): Authentication.Api.JwtPayload => {
        const request = context.switchToHttp().getRequest()

        return request.user
    },
)
