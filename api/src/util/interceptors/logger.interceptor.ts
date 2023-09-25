import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IRequest } from '..';

@Injectable()
export class Logger implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: IRequest = context.switchToHttp().getRequest();
    if (request.loggerOn) {
      console.log('Logging body ');
      console.log(request.body);
    }
    return next.handle();
  }
}
