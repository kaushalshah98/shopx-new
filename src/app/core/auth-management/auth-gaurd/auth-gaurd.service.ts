import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NOTIFICATION } from '@core/api/names';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private notification: NotificationService
  ) {}

  canLoad(): Observable<boolean> {
    return this.validAuth();
  }
  private validAuth(): Observable<boolean> {
    return of(this.storage.getItem('USER')).pipe(
      map((user) => {
        if (user && user.role === 'admin') {
          return true;
        }
        this.notification.error(`${NOTIFICATION.Unauthorized_Access}`);
        this.notification.warning(`${NOTIFICATION.You_Have_Not_Admin_rights}`);
        this.router.navigate(['/login']);
        return false;
      }),
      take(1)
    );
  }
  // canActivate(): Observable<boolean> {
  //   return this.validuserAuth();
  // }
  // private validuserAuth(): Observable<boolean> {
  //   return of(this.storage.getItem('USER')).pipe(
  //     map((user) => {
  //       if (user) {
  //         return true;
  //       }
  //       this.notification.warning('You Must be logged in..!');
  //       return false;
  //     }),
  //     take(1)
  //   );
  // }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.role.getRole() === 'admin') {
  //     return true;
  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       // background: '#fff',
  //       // backdrop: `rgba(0,0,123,0.4)`,
  //       text: 'You Are Not Allowed To View This Page.'
  //     }).then((result) => {
  //       if (result.value) {
  //         // navigating to login page
  //         this.router.navigate(['/login']);
  //       }
  //     });
  //   }
  // }
}
