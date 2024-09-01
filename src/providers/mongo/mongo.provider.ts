import { Module } from '@nestjs/common'

import { GameplayDatabaseProviderModule } from '@/modules/feature/gameplay/gameplay.provider'

@Module({
    imports: [GameplayDatabaseProviderModule],
})
export class MongoDatabaseProviderModule {}
