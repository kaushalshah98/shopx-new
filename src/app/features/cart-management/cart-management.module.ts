import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '@shared/shared.module';
import { CartManagementRoutingModule } from './cart-management-routing.module';
import { BillingComponent } from './checkout/billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ReciptComponent } from './checkout/recipt/recipt.component';
import { ViewCartitemsComponent } from './view-cartitems/view-cartitems.component';

@NgModule({
  declarations: [
    ViewCartitemsComponent,
    CheckoutComponent,
    BillingComponent,
    PaymentComponent,
    ReciptComponent
  ],
  imports: [CommonModule, CartManagementRoutingModule, MatSidenavModule, SharedModule]
})
export class CartManagementModule {
  constructor() {}
}
