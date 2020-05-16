import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TrackError, User } from '@shared/interfaces';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminManagementService } from '../../admin-service/admin-management.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[] | TrackError> {
  constructor(private adminmanagement: AdminManagementService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[] | TrackError> {
    return this.adminmanagement.getusers().pipe(catchError((err) => of(err)));
  }
}
