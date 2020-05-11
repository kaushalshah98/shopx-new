import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from '../features/user-management/contact/contact.component';
import { AuthorsCarouselComponent } from './authors-carousel/authors-carousel.component';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { BigInputComponent } from './big-input/big-input/big-input.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';
import { DescriptionViewerComponent } from './description-viewer/description-viewer.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { FooterComponent } from './footer/footer.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ImagePopupService } from './image-popup/image-popup.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LeftPanelContainer } from './left-panel/left-panel.container';
import { MenuitemsComponent } from './left-panel/menuitems/menuitems.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { LoadingBarModule } from './loading-bar/loading-bar.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCarousel2Component } from './product-carousel2/product-carousel2.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { QuickViewService } from './quickview/quickview.service';
import { ReviewsViewerComponent } from './reviews-viewer/reviews-viewer.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    ContactComponent,
    ProductCarousel2Component,
    AuthorsCarouselComponent,
    DescriptionViewerComponent,
    ReviewsViewerComponent,
    ImageViewerComponent,
    FilterInputComponent,
    LeftPanelContainer,
    MenuitemsComponent,
    JumbotronComponent,
    QuickviewComponent,
    ImagePopupComponent,
    ConfirmDialogComponent,
    ListProductsComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent,
    BigInputActionComponent,
    BigInputComponent
  ],
  imports: [
    ToastrModule.forRoot(), // ToastrModule added
    SharedRoutingModule,
    CommonModule,
    TranslateModule,
    NgxImageZoomModule.forRoot(),
    MaterialModule,
    RouterModule,
    LoadingBarModule,
    FlexLayoutModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  providers: [ConfirmDialogService, ImagePopupService, QuickViewService],
  entryComponents: [ConfirmDialogComponent, ImagePopupComponent, QuickviewComponent],
  exports: [
    ContactComponent,
    ProductCarousel2Component,
    AuthorsCarouselComponent,
    DescriptionViewerComponent,
    ReviewsViewerComponent,
    ImageViewerComponent,
    FilterInputComponent,
    LeftPanelContainer,
    FooterComponent,
    JumbotronComponent,
    QuickviewComponent,
    MenuitemsComponent,
    ImagePopupComponent,
    NavbarComponent,
    ListProductsComponent,
    SpinnerComponent,
    BigInputActionComponent,
    BigInputComponent,

    LoadingBarModule,
    NgxImageZoomModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class SharedModule {}
