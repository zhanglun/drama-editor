import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      let message: string;
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const resp = exceptionResponse as Record<string, unknown>;
        if (typeof resp.message === 'string') {
          message = resp.message;
        } else if (Array.isArray(resp.message)) {
          message = resp.message.join(', ');
        } else {
          message = exception.message;
        }
      } else {
        message = exception.message;
      }

      response.status(status).json({ error: message });
    } else {
      const message =
        exception instanceof Error ? exception.message : 'Internal server error';
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: message });
    }
  }
}
