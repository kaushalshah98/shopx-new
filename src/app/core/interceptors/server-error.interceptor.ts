import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@services/notification/notification.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // let jsonreq :HttpRequest<any> = request.clone(
    //   {
    //     setHeaders:{'Content-Type' :'application/json'}
    //   }
    // )
    // return next.handle(jsonreq);
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if (error.status === 401 || error.status === 403) {
            // refresh token
            this.router.navigateByUrl('/login');
          }
          if (error.status === 400) {
            if (Array.isArray(error.error.error.description)) {
              const errorSize = error.error.error.description.length;
              for (let i = 0; i < errorSize; i++) {
                this.notificationService.error(error.error.error.description[i]);
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.error.description[i]}`;
              }
            } else {
              errorMessage = `Error Code: ${error.error.error.code}\nMessage: ${error.error.error.description}`;
              this.notificationService.error(error.error.error.description);
            }
          } else if (error.status === 404) {
            this.notificationService.error(error.error.error.description);
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.error.description}`;
          } else {
            this.notificationService.error(error.message);
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        }
        console.log(errorMessage);
        this.notificationService.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
