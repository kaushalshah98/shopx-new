import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { ProductItem } from '@shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {
  constructor(private apiservice: ApiService) {}
  fetchallproducts(): Observable<any> {
    return this.apiservice.get(`${PATH.GET_PRODUCT_LIST}`);
  }
  deleteproduct(product_id: string): Observable<any> {
    return this.apiservice.delete(PATH.DELETE_PRODUCT(product_id));
  }
  updateproduct(product_id: string, product: ProductItem): Observable<any> {
    return this.apiservice.put(PATH.PUT_UPDATE_PRODUCT(product_id), product);
  }
  getproduct(product_id: string): Observable<any> {
    return this.apiservice.get(PATH.GET_PRODUCT(product_id));
  }
  addproduct(product: ProductItem): Observable<any> {
    return this.apiservice.post(`${PATH.POST_ADD_PRODUCT}`, product);
  }
  getallproducts(data: any): Observable<any> {
    return this.apiservice.post(`${PATH.GET_CATEGORY_PRODUCT}`, data);
  }
}
