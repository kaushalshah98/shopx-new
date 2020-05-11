import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`, {
      headers: this.headers,
      params
    });
  }

  post(url: string, data: object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers
    });
  }

  put(url: string, data: object = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers
    });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${url}`, {
      headers: this.headers
    });
  }
}

export const PATH = {
  // User Management
  POST_LOGIN: '/verifyuser',
  POST_CREATE_USER: '/createuser',
  GET_USER: (userid: string) => `/getuser/${userid}`,
  PUT_UPDATE_USER: (userid: string) => `/updateuserdata/${userid}`,
  POST_FORGOT_PASSWORD: '/forgotpassword',
  POST_MESSAGE: '/sendmessage',

  // Admin Management
  GET_USER_LIST: '/getallusers',
  PUT_BLOCK_USER: (userid: string) => `/blockuser/${userid}`,
  DELETE_USER: (userId: string) => `/user-management/users/${userId}/delete`,

  // Product Management
  GET_PRODUCT_LIST: '/getallproducts',
  GET_CATEGORY_PRODUCT: '/getproducts',
  PUT_UPDATE_PRODUCT: (product_id: string) => `/updateproduct/${product_id}`,
  DELETE_PRODUCT: (product_id: string) => `/removeproduct/${product_id}`,
  POST_ADD_PRODUCT: '/addproduct',
  GET_PRODUCT: (product_id: string) => `/getproduct/${product_id}`,

  // Buy-List-Management
  GET_BUY_LIST: (userid: string) => `/getbuylistitems/${userid}`,
  POST_BUY_LIST: (userid: string) => `/addtolist/${userid}`,

  // Review-Management
  GET_REVIEW_LIST: (product_id: string) => `/getreviews/${product_id}`,
  POST_REVIEW_LIST: (product_id: string) => `/addreview/${product_id}`,

  // Order-Management
  GET_ORDER_LIST: '/getallorders',
  GET_USER_ORDER_LIST: (userid: string) => `/getUserOrder/${userid}`,
  POST_ORDER: (userid: string) => `/addorder/${userid}`,
  PUT_DELETE_ORDER: (userid: string) => `/removeorder/${userid}`,

  // Wish-List-Management
  GET_WISH_LIST: (userid: string) => `/getwishlistitems/${userid}`,
  POST_WISH_ITEM: '/AddToWishlist',
  DELETE_WISH_LIST: (userid: string) => `/emptywishlist/${userid}`,
  PUT_WISH_ITEM: (userid: string) => `/removewishlistitem/${userid}`,

  // Cart-Management
  GET_CART_ITEMS: (userid: string) => `/getcartitems/${userid}`,
  POST_CART_ITEM: '/AddTocart',
  DELETE_CART: (userid: string) => `/emptycart/${userid}`,
  PUT_DELETE_CART_ITEM: (userid: string) => `/removecartitem/${userid}`,
  PUT_UPDATE_CART__ITEM: (userid: string) => `/updatecartitem/${userid}`,
  GET_CARTSIZE: (userid: string) => `/cartsize/${userid}`,

  // Theme-Management
  GET_THEME: (userid: string) => `/theme/${userid}`,
  PUT_THEME: (userid: string) => `/changetheme/${userid}`,

  GET_ORGANISATION_BY_ID: (nodeId) => `/node-management/node/${nodeId}`,
  GET_NODE_THEME: (domain) => `/node-management/organization/${domain}/theme`,
  POST_CREATE_NODE: '/node-management/node',
  POST_CREATE_ORGANIZATION: '/node-management/node',
  GET_NODE_CONFIG_BY_ID: (nodeId) => `/node-management/node/${nodeId}/configuration`,
  GET_NODE_BY_ID: (nodeId, status = true) => `/node-management/node/${nodeId}?status=${status}`,
  // Notification Management
  NOTIFICATION: '/notfication',
  // Common Management
  UPLOAD_PROFILE_PHOTO: '/common/uploadfile',
  GET_COUNTRIES: '/common/countries',
  GET_LANGUAGES: '/common/language',
  GET_SHORT_DATETIME_FORMATS: '/common/short-date-time',
  GET_PURGE: '/common/purge',
  GET_TIMEZONES: '/common/timezones',
  GET_LONG_DATE_TIME_FORMATS: '/common/long-date-time',
  GET_CURRENCIES: '/common/currency',
  GET_THEMES: '/common/themes',
  GET_ALL_MODULE: '/common/module',
  // AM Config Management
  GET_AM_ACCESS_RIGHTS: '/am-config/access-rights',
  // TM Config Management
  GET_TM_ACCESS_RIGHTS: '/tm-config/access-rights',
  // Role Management
  GET_MODULES_BY_ROLE: (roleName) => `/role-management/roles/modules/${roleName}`,
  POST_CREATE_ROLE: '/role-management/roles',
  GET_ROLE_LIST: '/role-management/roles',
  PUT_ROLE: (roleId) => `/role-management/roles/${roleId}`,
  PUT_UPDATE_ROLE_STATUS: (roleId) => `/role-management/roles/${roleId}/status`,
  DELETE_ROLE: (roleId) => `/role-management/roles/${roleId}`,
  // Transaction Management
  GET_REASON_CATEGORY: '/transaction-management/reasons/category',
  GET_TENDER_TYPE: '/transaction-management/tender/type'
};
