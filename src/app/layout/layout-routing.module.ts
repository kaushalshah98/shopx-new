import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchHeadphonesComponent } from '../features/product-management/ProductCategories/Electronics/fetch-headphones.component';
import { FetchLaptopComponent } from '../features/product-management/ProductCategories/Electronics/fetch-laptop.component';
import { FetchTvComponent } from '../features/product-management/ProductCategories/Electronics/fetch-tv.component';
import { FetchShirtComponent } from '../features/product-management/ProductCategories/MensFashion/fetch-shirt.component';
import { FetchShoesComponent } from '../features/product-management/ProductCategories/MensFashion/fetch-shoes.component';
import { FetchSunglassComponent } from '../features/product-management/ProductCategories/MensFashion/fetch-sunglass.component';
import { FetchTshirtComponent } from '../features/product-management/ProductCategories/MensFashion/fetch-tshirt.component';
import { FetchAccessoriesComponent } from '../features/product-management/ProductCategories/Mobiles/fetch-accessories.component';
import { FetchSmartphonesComponent } from '../features/product-management/ProductCategories/Mobiles/fetch-smartphones.component';
import { FetchTabletsComponent } from '../features/product-management/ProductCategories/Mobiles/fetch-tablets.component';
import { FetchDressComponent } from '../features/product-management/ProductCategories/WomensFashion/fetch-dress.component';
import { FetchLadiesNightwearComponent } from '../features/product-management/ProductCategories/WomensFashion/fetch-ladies-nightwear.component';
import { FetchLadiesShoesComponent } from '../features/product-management/ProductCategories/WomensFashion/fetch-ladies-shoes.component';
import { FetchSareeComponent } from '../features/product-management/ProductCategories/WomensFashion/fetch-saree.component';
import { FetchWatchComponent } from '../features/product-management/ProductCategories/WomensFashion/fetch-watch.component';
import { HomepageComponent } from '../layout/homepage/homepage.component';
import { PageContentComponent } from '../layout/homepage/page-content/page-content.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: 'mens_tshirts',
        component: FetchTshirtComponent
      },
      {
        path: 'mens_shirts',
        component: FetchShirtComponent
      },
      {
        path: 'mens_shoes',
        component: FetchShoesComponent
      },
      {
        path: 'mens_sunglasses',
        component: FetchSunglassComponent
      },
      {
        path: 'womens_saree',
        component: FetchSareeComponent
      },
      {
        path: 'womens_dress',
        component: FetchDressComponent
      },
      {
        path: 'womens_shoes',
        component: FetchLadiesShoesComponent
      },
      {
        path: 'womens_watch',
        component: FetchWatchComponent
      },
      {
        path: 'womens_nightwear',
        component: FetchLadiesNightwearComponent
      },
      {
        path: 'televisions',
        component: FetchTvComponent
      },
      {
        path: 'laptops',
        component: FetchLaptopComponent
      },
      {
        path: 'headphones',
        component: FetchHeadphonesComponent
      },
      {
        path: 'mobile_accessories',
        component: FetchAccessoriesComponent
      },
      {
        path: 'tablets',
        component: FetchTabletsComponent
      },
      {
        path: 'smartphones',
        component: FetchSmartphonesComponent
      },
      {
        path: 'home',
        component: PageContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
