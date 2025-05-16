// src/app/core/api.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private readonly auth: AuthService,
    private readonly messageService: MessageService,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // 1️⃣ Clone & add auth header + withCredentials
    const token = this.auth.getToken();
    let authReq = req.clone({
      withCredentials: true,
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
    });

    // 2️⃣ Send the request & catch errors
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        // show a toast on error
        const detail = err.error?.message ?? err.message;
        this.messageService.add({
          severity: 'error',
          summary: `Error ${err.status}`,
          detail,
        });

        return throwError(() => err);
      }),
    );
  }
}
