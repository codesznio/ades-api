import { Module } from '@nestjs/common'

// Modules
import { GameplayModule } from './gameplay'

@Module({
    imports: [GameplayModule],
})
export class FeatureModule {}
