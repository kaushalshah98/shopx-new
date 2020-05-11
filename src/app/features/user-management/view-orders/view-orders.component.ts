import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { CONFIRM } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { OrderService } from '../../cart-management/checkout/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {
  heading = 'YOUR ORDERS';
  i = 0;
  orderitems: any;
  displayedColumns: string[] = ['number', 'image', 'name', 'price', 'quantity', 'action'];
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
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
      this.orderservice.getUserOrder().subscribe(
        (res) => (this.orderitems = res),
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          this.notification.error(error.message);
        },
        () => this.dataLoading.emit(false)
      );
    }, 1000);
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  cancelOrder(item, i) {
    this.dialog
      .showConfirmDialog(`${CONFIRM.are_you_sure_want_to_cancel_this_order}`)
      .subscribe((result) => {
        if (result === 'yes') {
          this.orderitems.splice(i);
          this.orderservice.removeOrder(this.orderitems).subscribe(
            (res) => res,
            (error: HttpErrorResponse) => {
              this.dataLoading.emit(false);
              this.notification.error(error.message);
            },
            () => this.initializeOrders()
          );
        }
      });
  }
  reset() {
    this.i = 0;
  }
  increment() {
    this.i = this.i + 1;
    return this.i;
  }
}
