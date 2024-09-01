import { Controller, Get } from '@nestjs/common'

// Types
import { Api } from '@/types'

@Controller()
export class AppController {
    @Get()
    version(): Api.Response<{ message: string; api: number }> {
        return {
            success: true,
            data: {
                api: 0.1,
                message: 'The API is running successfully.',
            },
        }
    }
}
