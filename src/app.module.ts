import { EventEmitterModule } from '@nestjs/event-emitter'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'

// Controller
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'
import { MiddlewareModule } from '@/middleware'

// Middleware
import { RequestContextMiddleware, UserAgentMiddleware } from '@/middleware'
import { FeatureModule } from './modules/feature'

@Module({
    imports: [
        CacheModule.register(),
        EventEmitterModule.forRoot(),

        // Core Modules
        ConfigModule,
        MiddlewareModule,
        ProvidersModule,

        // Feature
        FeatureModule,
    ],
    controllers: [AppController],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RequestContextMiddleware, UserAgentMiddleware).forRoutes('*')
    }
}
