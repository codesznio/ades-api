import { User } from '@/modules/feature/users/modules/user/schema'
import { Request } from 'express'

export type UserEmailLogin = {
    user: User
    req?: Request
}
