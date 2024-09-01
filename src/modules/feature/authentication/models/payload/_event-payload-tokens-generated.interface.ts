import { Request } from 'express'
import { Tokens } from '../api/jwt'
import { User } from '@/modules/feature/users/modules/user/schema'

export type TokensGenerated = {
    user: User
    tokens: Tokens
    req?: Request
}
