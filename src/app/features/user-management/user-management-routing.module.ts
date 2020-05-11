import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'wishlist',
    component: WishListComponent
  },
  {
    path: 'my_orders',
    component: ViewOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}
