import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'

// Strategies
import { AccessStrategy, RefreshStrategy } from './strategies'

// Services
import { JwtService } from './jwt.service'

// Imports
import { UserModule } from '@/modules/feature/users/modules'
import { PlayerModule } from '@/modules/feature/players/modules'

@Module({
    imports: [NestJwtModule.register({}), UserModule, PlayerModule],
    providers: [JwtService, AccessStrategy, RefreshStrategy],
    exports: [JwtService],
})
export class JwtModule {}
