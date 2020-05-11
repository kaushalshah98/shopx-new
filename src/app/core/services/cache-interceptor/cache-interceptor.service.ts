import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpcacheService } from '@services/cache/httpcache.service';
@Injectable({
  providedIn: 'root'
})
export class CacheInterceptorService {

  constructor(private cacheservice: HttpcacheService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      this.cacheservice.invalidateCache();
      return next.handle(request);
    }

    const cachedresponse: HttpResponse<any> = this.cacheservice.get(request.url);

    if (cachedresponse) {
      return of(cachedresponse);
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheservice.put(request.url, event);
        }
      })
    )
  }
}
