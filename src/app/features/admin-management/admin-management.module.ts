import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ContentComponent } from './adminpage/content/content.component';
import { AddProductComponent } from './product-components/add-product/add-product.component';
import { DeleteProductComponent } from './product-components/delete-product/delete-product.component';
import { UpdateProductComponent } from './product-components/update-product/update-product.component';
import { UpdateComponent } from './product-components/update-product/update/update.component';
import { ViewProductsComponent } from './product-components/view-products/view-products.component';
import { BlockUserComponent } from './user-components/block-user/block-user.component';
import { ViewUserOrderComponent } from './user-components/view-user-order/view-user-order.component';
import { ViewUsersComponent } from './user-components/view-users/view-users.component';

@NgModule({
  declarations: [
    AdminpageComponent,
    ViewUsersComponent,
    BlockUserComponent,
    ViewProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ContentComponent,
    ViewUserOrderComponent,
    UpdateComponent
  ],
  imports: [CommonModule, SharedModule, AdminManagementRoutingModule]
})
export class AdminManagementModule {
  constructor() {}
}
