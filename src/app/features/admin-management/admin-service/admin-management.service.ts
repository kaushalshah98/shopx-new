import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { TrackError, User } from '@shared/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminManagementService {
  constructor(private apiservice: ApiService) {}
  blockuser(status: any, userid: string): Observable<any> {
    return this.apiservice.put(PATH.PUT_BLOCK_USER(userid), status);
  }
  getusers(): Observable<User[] | TrackError> {
    return this.apiservice.get(`${PATH.GET_USER_LIST}`).pipe(
      map((response) => response.body.result),
      catchError((err) => this.handleHttpError(err))
    );
  }
  private handleHttpError(error: HttpErrorResponse): Observable<TrackError> {
    const data_error = new TrackError();
    data_error.errorNumber = 200;
    data_error.message = error.statusText;
    data_error.friendlymessage = error.message;
    return throwError(data_error);
  }
}
