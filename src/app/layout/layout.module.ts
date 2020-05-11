import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ProductManagementModule } from '../features/product-management/product-management.module';
import { CategoryCardComponent } from '../layout/homepage/page-content/category-card/category-card.component';
import { CategoryTilesComponent } from '../layout/homepage/page-content/category-tiles/category-tiles.component';
import { ImageSliderComponent } from '../layout/homepage/page-content/image-slider/image-slider.component';
import { PageContentComponent } from '../layout/homepage/page-content/page-content.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutRoutingModule } from './layout-routing.module';
@NgModule({
  declarations: [
    HomepageComponent,
    PageContentComponent,
    CategoryCardComponent,
    ImageSliderComponent,
    CategoryTilesComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, ProductManagementModule, SharedModule, RouterModule]
})
export class LayoutModule {
  constructor() {}
}
