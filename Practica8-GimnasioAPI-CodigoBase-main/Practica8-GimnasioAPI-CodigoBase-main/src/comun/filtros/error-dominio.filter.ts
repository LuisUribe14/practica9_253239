import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ErrorDominio } from '../../inscripciones/dominio/errores';

@Catch(ErrorDominio)
export class ErrorDominioFilter implements ExceptionFilter {
  catch(error: ErrorDominio, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const status = error.tipo === 'no-encontrado' ? HttpStatus.NOT_FOUND : HttpStatus.CONFLICT;

    res.status(status).json({
      statusCode: status,
      message: error.message,
      path: req.url,
      timestamp: new Date().toISOString(),
    });
  }
}