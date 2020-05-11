import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { UserManagementService } from 'src/app/features/user-management/user-service/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  userid: string;
  constructor(private apiservice: ApiService, private userservice: UserManagementService) {}
  changeTheme(night_theme: any): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.put(PATH.PUT_THEME(this.userid), night_theme);
  }
  getTheme(): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.get(PATH.GET_THEME(this.userid));
  }
}
