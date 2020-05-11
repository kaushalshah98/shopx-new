import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { ProductItem } from '@shared/interfaces';
import { ProductManagementService } from '../../product-service/product-management.service';
@Component({
  selector: 'app-fetch-ladies-nightwear',
  template: `
    <div class="list-product-style">
      <app-jumbotron [Heading]="heading"></app-jumbotron>
      <app-filter-input (keyup)="onInputChanged($event.target.value)" (filter)="onFilter($event)">
      </app-filter-input>
      <app-spinner [loading]="dataLoading" class="centre-product-spinner"></app-spinner>
      <div [ngClass]="{ dimmed: dimmed }">
        <app-list-products [productitems]="products"></app-list-products>
      </div>
    </div>
  `,
  styles: []
})
export class FetchLadiesNightwearComponent implements OnInit {
  productitems: ProductItem[];
  heading = 'menu_item.nightwear';
  @Output() filter: EventEmitter<string> = new EventEmitter();
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  products: ProductItem[];
  dimmed = false;
  data = {
    innercategory: 'Dress',
    category: 'WomensFashion'
  };
  constructor(
    private productservice: ProductManagementService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    document.getElementById('mainsearch').style.visibility = 'hidden';
    this.fetchproduct();
  }
  fetchproduct() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.productservice.getallproducts(this.data).subscribe(
        (res) => {
          if (res === null || res === undefined) {
            this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
            this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
          } else {
            this.productitems = res;
            this.products = this.productitems;
          }
        },
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          this.notification.error(error.message);
        },
        () => this.dataLoading.emit(false)
      );
    }, 1000);
  }
  onFilter(event: any) {
    if (event === 'low') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (event === 'high') {
      this.products.sort((a, b) => b.price - a.price);
    } else {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  onInputChanged(input: string) {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.dimmed = false;
      this.products = this.productitems.filter((items) => {
        return items.name.toLowerCase().includes(input.toLowerCase());
      });
    }, 1000);
  }
}
