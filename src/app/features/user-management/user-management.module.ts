import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BuyListComponent } from './profile/buy-list/buy-list.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { RegisterComponent } from './register/register.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ViewProfileComponent,
    EditProfileComponent,
    WishListComponent,
    ViewOrdersComponent,
    ProfileComponent,
    BuyListComponent,
    ForgotPasswordComponent
  ],
  imports: [CommonModule, UserManagementRoutingModule, SharedModule],
  exports: [ProfileComponent, RegisterComponent]
})
export class UserManagementModule {
  constructor() {}
}
