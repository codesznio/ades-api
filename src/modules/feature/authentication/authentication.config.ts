import { registerAs } from '@nestjs/config'

export const authenticationConfig = registerAs('authentication', () => ({
    database: process.env.DB_AUTHENTICATION,
    jwt_access: process.env.JWT_ACCESS,
    jwt_refresh: process.env.JWT_REFRESH,
    jwt_issuer: process.env.JWT_ISSUER,
}))
