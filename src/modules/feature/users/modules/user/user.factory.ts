import { Injectable } from '@nestjs/common'

// Common
import { StringEncryptor } from '@/common'
import { Authentication } from '@/modules/feature/authentication/models'
import { User } from './schema'

@Injectable()
export class UserFactory {
    constructor(private readonly _stringEncryptor: StringEncryptor) {}

    get register() {
        return {
            withEmail: (dto: Authentication.Api.RegisterWithEmailParams): User => {
                const user = new User()

                user.providers = {
                    email: {
                        email: dto.email,
                        password: this._stringEncryptor.generate(dto.password),
                        verified: false,
                    },
                    registered: 'EMAIL',
                }

                return user
            },
        }
    }
}
