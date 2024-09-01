import { registerAs } from '@nestjs/config'

export const usersConfig = registerAs('users', () => ({
    database: process.env.DB_USERS,
}))
