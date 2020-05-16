import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { BuyList } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { UserManagementService } from '../../user-service/user-management.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class BuyListService {
  userid: string;
  constructor(private apiservice: ApiService, private userservice: UserManagementService) { }

  addtolist(buylist: BuyList[]): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.post(PATH.POST_BUY_LIST(this.userid), buylist)
  }
  getbuylist(): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.get(PATH.GET_BUY_LIST(this.userid))
      .pipe(map((response) => response.body.result));
  }
}
