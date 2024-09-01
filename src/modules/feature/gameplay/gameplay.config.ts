import { registerAs } from '@nestjs/config'

export const gameplayConfig = registerAs('gameplay', () => ({
    database: process.env.DB_GAMEPLAY,
}))
