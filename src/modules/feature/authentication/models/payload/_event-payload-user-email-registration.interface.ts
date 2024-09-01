import { User } from '@/modules/feature/users/modules/user/schema'
import { Request } from 'express'

export type UserEmailRegistration = {
    user: User
    req?: Request
}
