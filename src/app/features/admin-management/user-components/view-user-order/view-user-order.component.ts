import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { OrderService } from 'src/app/features/cart-management/checkout/order.service';

@Component({
  selector: 'app-view-user-order',
  templateUrl: './view-user-order.component.html',
  styleUrls: ['./view-user-order.component.scss']
})
export class ViewUserOrderComponent implements OnInit {
  displayedColumns: string[] = ['number', 'image', 'name', 'price', 'quantity'];
  i = 0;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  user = [];
  constructor(
    private view: QuickViewService,
    private dialog: ConfirmDialogService,
    public property: PropertyAccessService,
    private orderservice: OrderService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.initializeOrders();
  }
  initializeOrders() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.orderservice.getAllOrders().subscribe(
        (res) => (this.user = res),
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          this.notification.error(error.message);
        },
        () => this.dataLoading.emit(false)
      );
    }, 1000);
  }
  reset() {
    this.i = 0;
  }
  increment() {
    this.i = this.i + 1;
    return this.i;
  }
}
