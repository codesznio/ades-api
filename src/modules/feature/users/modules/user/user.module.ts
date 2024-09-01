import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Types
import { Data } from '@/types'

// Schema
import { UserSchema } from './schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: Data.SchemaName.USER, schema: UserSchema }], Data.DatabaseName.USERS)],
})
export class UserModule {}
