import { Module } from '@nestjs/common'
import { AuthenticationWithEmailModule, JwtModule } from './modules'

@Module({
    imports: [AuthenticationWithEmailModule, JwtModule],
})
export class AuthenticationModule {}
