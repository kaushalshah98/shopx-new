import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NOTIFICATION } from '@core/api/names';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductReview, Review, ReviewList, User } from '@shared/interfaces';
import { ReviewViewerService } from './review-viewer.service';
@Component({
  selector: 'app-reviews-viewer',
  templateUrl: './reviews-viewer.component.html',
  styleUrls: ['./reviews-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsViewerComponent implements OnInit {
  totalreviewcount = 0;
  @Input() product_id: string;
  reviews: ReviewList[];
  reviewtext: FormControl = new FormControl('');
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dimmed = false;
  data: User;
  constructor(
    public property: PropertyAccessService,
    private reviewservice: ReviewViewerService,
    private notification: NotificationService,
    private storage: LocalStorageService
  ) {
    this.data = this.storage.getItem('USER');
  }

  ngOnInit() {
    this.fetchreviews();
  }
  fetchreviews() {
    this.dataLoading.emit(true);
    this.dimmed = true;
    setTimeout(() => {
      this.reviewservice.getreviews(this.product_id).subscribe(
        (res) => {
          this.reviews = res;
          this.totalreviewcount = this.reviews.length;
        },
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          this.dimmed = false;
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.reset();
          this.dimmed = false;
          this.dataLoading.emit(false);
        }
      );
    }, 1000);
  }
  addreview() {
    if (this.data) {
      this.dimmed = true;
      this.dataLoading.emit(true);

      const review: ReviewList = {
        userid: this.data.userid,
        name: this.data.name,
        review: this.reviewtext.value
      };
      this.reviews.unshift(review);
      this.reviewservice.addreview(this.product_id, this.reviews).subscribe(
        (res) => res,
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          this.dimmed = false;
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.dataLoading.emit(false);
          this.dimmed = false;
          this.notification.info(`${NOTIFICATION.Review_is_added}`);
          this.fetchreviews();
        }
      );
    } else {
      this.notification.warning(`${NOTIFICATION.You_are_Not_Logged_In}`);
    }
  }
  reset() {
    this.reviewtext.reset();
    this.totalreviewcount = this.reviews.length;
  }
  isUserReview(userid: string) {
    if (this.data && userid === this.data.userid) {
      return true;
    }
    return false;
  }
  deletereview(review: ReviewList) {
    this.dimmed = true;
    this.dataLoading.emit(true);
    this.reviews = this.reviews.filter(
      (item: ReviewList) => !(item.review === review.review && item.userid === review.userid)
    );
    this.reviewservice.addreview(this.product_id, this.reviews).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        this.dimmed = false;
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.dataLoading.emit(false);
        this.dimmed = false;
        this.notification.info(`${NOTIFICATION.Review_is_deleted}`);
        this.fetchreviews();
      }
    );
  }
}
