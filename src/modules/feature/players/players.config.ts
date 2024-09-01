import { registerAs } from '@nestjs/config'

export const playersConfig = registerAs('players', () => ({
    database: process.env.DB_PLAYERS,
}))
