import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Types
import { Data } from '@/types'

// Common
import { StringEncryptor } from '@/common'

// Imports
import { UserSchema } from './schema'
import { UserFactory } from './user.factory'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Data.SchemaName.USER, schema: UserSchema }], Data.DatabaseName.USERS)],
    providers: [StringEncryptor, UserFactory, UserRepository, UserService],
    exports: [UserService],
})
export class UserModule {}
