import { Injectable } from '@angular/core';
import { NOTIFICATION } from '@core/api/names';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardService {
  constructor(private storage: LocalStorageService, private notification: NotificationService) {}
  canLoad(): Observable<boolean> {
    return this.validAuth();
  }
  private validAuth(): Observable<boolean> {
    return of(this.storage.getItem('USER')).pipe(
      map((user) => {
        if (user && (user.role === 'user' || user.role === 'admin')) {
          return true;
        }
        this.notification.warning(`${NOTIFICATION.You_are_Not_Logged_In}`);
        return false;
      }),
      take(1)
    );
  }
}
