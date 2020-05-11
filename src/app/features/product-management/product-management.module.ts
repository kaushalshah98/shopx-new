import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';
import { DetailviewComponent } from './detailview/detailview.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { FetchHeadphonesComponent } from './ProductCategories/Electronics/fetch-headphones.component';
import { FetchLaptopComponent } from './ProductCategories/Electronics/fetch-laptop.component';
import { FetchTvComponent } from './ProductCategories/Electronics/fetch-tv.component';
import { FetchShirtComponent } from './ProductCategories/MensFashion/fetch-shirt.component';
import { FetchShoesComponent } from './ProductCategories/MensFashion/fetch-shoes.component';
import { FetchSunglassComponent } from './ProductCategories/MensFashion/fetch-sunglass.component';
import { FetchTshirtComponent } from './ProductCategories/MensFashion/fetch-tshirt.component';
import { FetchAccessoriesComponent } from './ProductCategories/Mobiles/fetch-accessories.component';
import { FetchSmartphonesComponent } from './ProductCategories/Mobiles/fetch-smartphones.component';
import { FetchTabletsComponent } from './ProductCategories/Mobiles/fetch-tablets.component';
import { FetchDressComponent } from './ProductCategories/WomensFashion/fetch-dress.component';
import { FetchLadiesNightwearComponent } from './ProductCategories/WomensFashion/fetch-ladies-nightwear.component';
import { FetchLadiesShoesComponent } from './ProductCategories/WomensFashion/fetch-ladies-shoes.component';
import { FetchSareeComponent } from './ProductCategories/WomensFashion/fetch-saree.component';
import { FetchWatchComponent } from './ProductCategories/WomensFashion/fetch-watch.component';
import { ProductcompareComponent } from './productcompare/productcompare.component';

const components = [
  ProductcompareComponent,
  DetailviewComponent,
  FetchTvComponent,
  FetchLaptopComponent,
  FetchHeadphonesComponent,
  FetchTshirtComponent,
  FetchShirtComponent,
  FetchShoesComponent,
  FetchSunglassComponent,
  FetchAccessoriesComponent,
  FetchTabletsComponent,
  FetchSmartphonesComponent,
  FetchSareeComponent,
  FetchDressComponent,
  FetchWatchComponent,
  FetchLadiesShoesComponent
];
@NgModule({
  declarations: [
    DetailviewComponent,
    FetchTvComponent,
    FetchLaptopComponent,
    FetchHeadphonesComponent,
    FetchTshirtComponent,
    FetchShirtComponent,
    FetchShoesComponent,
    FetchSunglassComponent,
    FetchAccessoriesComponent,
    FetchTabletsComponent,
    FetchSmartphonesComponent,
    FetchSareeComponent,
    FetchDressComponent,
    FetchWatchComponent,
    FetchLadiesShoesComponent,
    FetchLadiesNightwearComponent,
    ProductcompareComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ProductManagementRoutingModule,
    MatIconModule,
    SharedModule
  ],
  exports: [components]
})
export class ProductManagementModule {
  constructor() {}
}
