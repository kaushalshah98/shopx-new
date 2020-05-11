import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { User } from '@shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  userid: string;
  constructor(private apiservice: ApiService) {}

  createuser(userdata: User): Observable<any> {
    return this.apiservice.post(`${PATH.POST_CREATE_USER}`, userdata);
  }
  verifyuser(userdata: any): Observable<any> {
    return this.apiservice.post(`${PATH.POST_LOGIN}`, userdata);
  }
  getuser(): Observable<any> {
    this.userid = this.getUserID();
    return this.apiservice.get(PATH.GET_USER(this.userid));
  }
  updateuser(userdata: any): Observable<any> {
    this.userid = this.getUserID();
    return this.apiservice.put(PATH.PUT_UPDATE_USER(this.userid), userdata);
  }
  forgotpassword(userdata: any): Observable<any> {
    return this.apiservice.post(`${PATH.POST_FORGOT_PASSWORD}`, userdata);
  }
  sendmessage(payload: any): Observable<any> {
    return this.apiservice.post(`${PATH.POST_MESSAGE}`, payload);
  }
  setUserId(userid: string) {
    localStorage.setItem('userid', JSON.stringify(userid));
  }
  getUserID() {
    return JSON.parse(localStorage.getItem('userid'));
  }
}
