// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'; // new API
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ApiInterceptor } from './app/core/api.interceptor';
import { AuthService } from './app/core/auth.service';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ToastModule), // for <prime-toast>
    provideHttpClient(
      withInterceptorsFromDi(), // look for HTTP_INTERCEPTORS
    ),
    // now register your interceptor the usual way
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    ...appConfig.providers,
    MessageService,
    AuthService,
    provideRouter(routes),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
