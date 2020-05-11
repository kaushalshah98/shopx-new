import { NgModule } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule
} from '@angular/router';
import { LoadingBarService } from './loading-bar.service';

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class LoadingBarRouterModule {
  constructor(router: Router, loadingBar: LoadingBarService) {
    router.events.subscribe((event) => {
      const state = this.getCurrentNavigationState(router);
      if (state && state.ignoreLoadingBar) {
        return;
      }

      if (event instanceof NavigationStart) {
        loadingBar.start();
      }

      if (
        event instanceof NavigationError ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        loadingBar.complete();
      }
    });
  }

  private getCurrentNavigationState(router: any) {
    // `getCurrentNavigation` only available in angular `7.2`
    const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras) {
      return currentNavigation.extras.state;
    }

    return {};
  }
}
