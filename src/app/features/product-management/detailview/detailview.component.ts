import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductItem } from '@shared/interfaces';
import { map } from 'rxjs/operators';
import { ProductManagementService } from '../product-service/product-management.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  state$: any;
  productid: string;
  productdata: ProductItem;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);

  constructor(
    private activateRouter: ActivatedRoute,
    public property: PropertyAccessService,
    private productservice: ProductManagementService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.state$ = this.activateRouter.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => (this.productid = res.product_id));
    this.fetchproductdetails();
  }
  fetchproductdetails() {
    this.productservice.getproduct(this.productid).subscribe(
      (res) => (this.productdata = res),
      (error: HttpErrorResponse) => {
        console.log(error);
        this.dataLoading.emit(false);
        this.notification.error(error.message);
      },
      () => this.dataLoading.emit(false)
    );
  }
}
