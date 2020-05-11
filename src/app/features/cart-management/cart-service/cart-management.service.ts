import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { UserManagementService } from '../../user-management/user-service/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class CartManagementService {
  userid: string;
  constructor(private apiservice: ApiService, private userservice: UserManagementService) {}

  addtoCart(product: any): Promise<any> {
    product.userid = this.userid;
    return this.apiservice.post(`${PATH.POST_CART_ITEM}`, product).toPromise();
  }
  getCartItems(): Promise<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.get(PATH.GET_CART_ITEMS(this.userid)).toPromise();
  }
  getCartSize(): Promise<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.get(PATH.GET_CARTSIZE(this.userid)).toPromise();
  }
  updateCart(product: any): Observable<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.put(PATH.PUT_UPDATE_CART__ITEM(this.userid), product);
  }
  removefromCart(product: any): Promise<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.put(PATH.PUT_DELETE_CART_ITEM(this.userid), product).toPromise();
  }
  clearCart(): Promise<any> {
    this.userid = this.userservice.getUserID();
    return this.apiservice.delete(PATH.DELETE_CART(this.userid)).toPromise();
  }
}
