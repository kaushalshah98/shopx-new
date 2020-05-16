import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { UserManagementService } from '../../user-management/user-service/user-management.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  userid: string;
  constructor(private apiservice: ApiService, private userservice: UserManagementService) { }
  addOrder(order: any): Observable<any> {
    this.userid = this.userservice.getUserID();
    order.userid = this.userid;
    return this.apiservice.post(PATH.POST_ORDER(this.userid), order);
  }
  getUserOrder(): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.get(PATH.GET_USER_ORDER_LIST(this.userid))
      .pipe(map((response) => response.body.result));
  }
  getAllOrders(): Observable<any> {
    return this.apiservice.get(`${PATH.GET_ORDER_LIST}`)
      .pipe(map((response) => response.body.result));
  }
  removeOrder(data: any): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.put(PATH.PUT_DELETE_ORDER(this.userid), data);
  }
}
