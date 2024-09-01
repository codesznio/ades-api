import { ConflictException, Injectable } from '@nestjs/common'

// User
import { User } from './schema'
import { UserFactory } from './user.factory'
import { UserRepository } from './user.repository'

// Common
import { StringEncryptor } from '@/common'
import { Authentication } from '@/modules/feature/authentication/models'

@Injectable()
export class UserService {
    constructor(
        private readonly _factory: UserFactory,
        private readonly _repository: UserRepository,
        private readonly _stringEncryptor: StringEncryptor,
    ) {}

    get register() {
        return {
            withEmail: async (dto: Authentication.Api.RegisterWithEmailParams): Promise<User> => {
                try {
                    const candidate = this._factory.register.withEmail(dto)

                    return await this._repository.create(candidate)
                } catch (err) {
                    throw new ConflictException({
                        message: 'register_form.default',
                        details: [],
                    })
                }
            },
        }
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<User | null> => {
                return this._repository.retrieve(id)
            },
            byEmail: (email: string): Promise<User | null> => {
                return this._repository.findOne({ 'providers.email.email': email })
            },
        }
    }

    get update() {
        return {
            refreshToken: (id: string, refresh: string): Promise<User> => {
                return this._repository.update(id, {
                    'tokens.jwt.refresh': this._stringEncryptor.generate(refresh),
                })
            },
        }
    }
}
