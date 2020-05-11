import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductManagementService } from 'src/app/features/product-management/product-service/product-management.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  productid: string;
  isDisabled = true;
  heightt: number;
  themestatus: boolean;
  constructor(
    public property: PropertyAccessService,
    private productservice: ProductManagementService,
    private notification: NotificationService
  ) {}
  ngOnInit() {}
  onProductDelete() {
    this.productservice.deleteproduct(this.productid).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => this.notification.error(error.message),
      () => this.notification.success(`${NOTIFICATION.Product_Has_been_Removed}`)
    );
  }
  onInputChanged(input: string) {
    if (input === null || input === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
    this.productid = input;
  }
}
