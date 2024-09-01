import { Module } from '@nestjs/common'
import { AuthenticationWithEmailModule } from './modules'

@Module({
    imports: [AuthenticationWithEmailModule],
})
export class AuthenticationModule {}
