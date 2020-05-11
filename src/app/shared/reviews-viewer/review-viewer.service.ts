import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { Review, ReviewList } from '@shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewViewerService {
  constructor(private apiservice: ApiService) {}
  addreview(product_id: string, review: ReviewList[]): Observable<any> {
    return this.apiservice.post(PATH.POST_REVIEW_LIST(product_id), review);
  }
  getreviews(product_id: string): Observable<any> {
    return this.apiservice.get(PATH.GET_REVIEW_LIST(product_id));
  }
}
