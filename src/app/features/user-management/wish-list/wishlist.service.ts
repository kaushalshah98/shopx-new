import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-service/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  userid: string;
  constructor(private apiservice: ApiService, private userservice: UserManagementService) {}

  addtoWishlist(product: any): Observable<any> {
    this.userid = this.userservice.getUserID();
    product.userid = this.userid;
    return this.apiservice.post(`${PATH.POST_WISH_ITEM}`, product);
  }
  getWishlistItems(): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.get(PATH.GET_WISH_LIST(this.userid));
  }
  updateWishlist(product: any): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.put(PATH.PUT_WISH_ITEM(this.userid), product);
  }
  clearWishlist(): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.delete(PATH.DELETE_WISH_LIST(this.userid));
  }
}
