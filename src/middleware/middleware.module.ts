import { Module } from '@nestjs/common'
import { RequestContextService } from './request-context'

@Module({
    providers: [RequestContextService],
    exports: [RequestContextService],
})
export class MiddlewareModule {}
