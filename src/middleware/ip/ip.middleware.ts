import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import * as geoip from 'geoip-lite'

@Injectable()
export class IpMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        const xForwardedFor = req.headers['x-forwarded-for'] as string
        let ipAddress: string

        if (xForwardedFor) {
            ipAddress = xForwardedFor.split(',')[0].trim()
        } else {
            ipAddress = req.ip
        }

        req['ipAddress'] = ipAddress
        req['geoIp'] = geoip.lookup(ipAddress)

        next()
    }
}
