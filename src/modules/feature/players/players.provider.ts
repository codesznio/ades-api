import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

// Types
import { Data } from '@/types/data'

@Module({
    imports: [
        MongooseModule.forRootAsync({
            connectionName: Data.DatabaseName.PLAYERS,
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('players.database'),
            }),
            inject: [ConfigService],
        }),
    ],
})
export class PlayersDatabaseProviderModule {}
