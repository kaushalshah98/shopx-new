import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { UsersResolverService } from './user-components/view-users/users-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-management',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminpageComponent,
    children: [
      {
        path: 'admin-management',
        component: ContentComponent
      },
      {
        path: 'viewproducts',
        component: ViewProductsComponent
      },
      {
        path: 'addproduct',
        component: AddProductComponent
      },
      {
        path: 'updateproduct',
        component: UpdateProductComponent
      },
      {
        path: 'update',
        component: UpdateComponent
      },
      {
        path: 'deleteproduct',
        component: DeleteProductComponent
      },
      {
        path: 'viewusers',
        component: ViewUsersComponent,
        resolve:{resolvedUsers :UsersResolverService}
      },
      {
        path: 'blockuser',
        component: BlockUserComponent
      },
      {
        path: 'vieworders',
        component: ViewUserOrderComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagementRoutingModule {}
