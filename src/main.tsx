import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

// App
import { AppModule } from '@/app.module'

// Common
import { HttpExceptionFilter } from '@/common'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        rawBody: true,
    })
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalFilters(new HttpExceptionFilter())

    // Express
    app.set('trust proxy', true)
    app.enableCors()
    app.disable('x-powered-by')

    const configService = app.get(ConfigService)
    const port = configService.get<number>('app.port')

    await app.listen(port)
}
bootstrap()
