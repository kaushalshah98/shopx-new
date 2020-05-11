import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoadingBarComponent } from './loading-bar.component';
import { LoadingBarInterceptor } from './loading-bar.interceptor';
import { LoadingBarService } from './loading-bar.service';
import { LoadingBarRouterModule } from './loading-router.module';

@NgModule({
  imports: [CommonModule, LoadingBarRouterModule],
  declarations: [LoadingBarComponent],
  providers: [
    LoadingBarService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true }
  ],
  exports: [LoadingBarComponent]
})
export class LoadingBarModule {}
