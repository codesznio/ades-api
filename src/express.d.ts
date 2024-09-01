import { UserAgent } from 'express-useragent'

declare global {
    namespace Express {
        interface Request {
            useragent?: UserAgent
            ipAddress?: string

            // geoIp?: {
            //     range?: string
            //     country?: string
            //     region?: string
            //     city?: string
            //     ll?: number[]
            // } Need to activate local db for this
        }
    }
}
