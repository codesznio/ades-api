import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response } from 'express'

export interface HttpErrorType {
    status: number
    message: string
    details: string[]
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const status = exception.getStatus()
        const exceptionResponse = exception.getResponse()

        response.status(status).json({
            data: {
                status,
                message: exceptionResponse['message'] || 'Unexpected error occured',
                details: exceptionResponse['details'] || [],
            },
            success: false,
        })
    }
}
