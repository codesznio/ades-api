import { Module } from '@nestjs/common'

// Imports
import { AuthenticationSharedModule } from '../authentication-shared'

// With Email
import { AuthenticationWithEmailController } from './authentication-with-email.controller'
import { AuthenticationWithEmailService } from './authentication-with-email.service'

@Module({
    imports: [AuthenticationSharedModule],
    controllers: [AuthenticationWithEmailController],
    providers: [AuthenticationWithEmailService],
    exports: [AuthenticationWithEmailService],
})
export class AuthenticationWithEmailModule {}
