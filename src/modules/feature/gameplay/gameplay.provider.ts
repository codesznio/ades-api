import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

// Types
import { Data } from '@/types/data'

@Module({
    imports: [
        MongooseModule.forRootAsync({
            connectionName: Data.DatabaseName.GAMEPLAY,
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('gameplay.database'),
            }),
            inject: [ConfigService],
        }),
    ],
})
export class GameplayDatabaseProviderModule {}
