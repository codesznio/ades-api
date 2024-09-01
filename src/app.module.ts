import { EventEmitterModule } from '@nestjs/event-emitter'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'

// Controller
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'
import { MiddlewareModule } from '@/middleware'

// Modules
import { FeatureModule } from './modules'

// Middleware
import { RequestContextMiddleware, UserAgentMiddleware } from '@/middleware'

@Module({
    imports: [
        CacheModule.register(),
        EventEmitterModule.forRoot(),

        // Core Modules
        ConfigModule,
        MiddlewareModule,
        ProvidersModule,

        // Modules
        FeatureModule,
    ],
    controllers: [AppController],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RequestContextMiddleware, UserAgentMiddleware).forRoutes('*')
    }
}
