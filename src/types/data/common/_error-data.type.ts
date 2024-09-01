import { AuthenticationError } from '@/modules/feature/authentication/modules/authentication-error/schema'
import { UserError } from '@/modules/feature/users/modules/user-error/schema'

export type ErrorData = AuthenticationError | UserError
