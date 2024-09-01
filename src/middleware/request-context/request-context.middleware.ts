import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

// Service
import { RequestContextService } from './request-context.service'

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
    constructor(private readonly _requestContextService: RequestContextService) {}

    use(req: Request, res: Response, next: NextFunction) {
        this._requestContextService.setRequest(req)
        next()
    }
}
