import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { HttpClient } from '@angular/common/http';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementModule } from './features/product-management/product-management.module';
import { PageNotFoundComponent } from './page-not-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class MissingTranslationHelper implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.warn(
      `No Translation provided for key ${params.key} in lang file ${params.translateService.currentLang}.json`
    );
    return `Translation Missing: ${params.key}`;
  }
}
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    ProductManagementModule,
    SharedModule,

    // app
    AppRoutingModule,

    // translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationHelper
      },
      useDefaultLang: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
