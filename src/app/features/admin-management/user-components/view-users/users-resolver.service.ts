import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User, TrackError } from '@shared/interfaces';
import { catchError } from 'rxjs/operators';
import { AdminManagementService } from '../../admin-service/admin-management.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[] | TrackError> {

  constructor(private adminmanagement: AdminManagementService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[] | TrackError> {
    return this.adminmanagement.getusers()
      .pipe(
        catchError(err => of(err))
      )
  }
}
