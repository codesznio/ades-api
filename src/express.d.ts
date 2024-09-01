import { UserAgent } from 'express-useragent'

declare global {
    namespace Express {
        interface Request {
            useragent?: UserAgent
            ipAddress?: string
        }
    }
}
