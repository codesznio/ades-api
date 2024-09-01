import { registerAs } from '@nestjs/config'

export const authenticationConfig = registerAs('authentication', () => ({
    database: process.env.DB_AUTHENTICATION,
}))
