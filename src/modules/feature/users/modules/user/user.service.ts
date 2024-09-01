import { Injectable } from '@nestjs/common'

// User
import { User } from './schema'
import { UserFactory } from './user.factory'
import { UserRepository } from './user.repository'

// Common
import { StringEncryptor } from '@/common'

@Injectable()
export class UserService {
    constructor(
        private readonly _factory: UserFactory,
        private readonly _repository: UserRepository,
        private readonly _stringEncryptor: StringEncryptor,
    ) {}

    get retrieve() {
        return {
            byEmail: (email: string): Promise<User | null> => {
                return this._repository.findOne({ 'providers.email.email': email })
            },
        }
    }
}
