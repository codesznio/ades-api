import { Module } from '@nestjs/common'
import { StringEncryptor } from '@/common'

// Modules
import { UserModule } from '@/modules/feature/users/modules'
import { PlayerModule } from '@/modules/feature/players/modules'
import { JwtModule } from '../jwt'

@Module({
    imports: [UserModule, PlayerModule, JwtModule],
    providers: [StringEncryptor],
    exports: [StringEncryptor, UserModule, PlayerModule, JwtModule],
})
export class AuthenticationSharedModule {}
