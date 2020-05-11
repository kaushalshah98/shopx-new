import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComparisonServiceService } from '@services/comparsion-service/comparison-service.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ApiModule } from './api/api.module';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { CacheInterceptorService } from '@services/cache-interceptor/cache-interceptor.service';

@NgModule({
  imports: [CommonModule, RouterModule, ApiModule],
  exports: [RouterModule],
  declarations: [],
  providers: [
    PropertyAccessService,
    ComparisonServiceService,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptorService,
      multi: true
    }
  ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
