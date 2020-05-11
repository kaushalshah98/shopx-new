import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from '@core/auth-management/auth-gaurd/auth-gaurd.service';
import { UserauthguardService } from '@core/auth-management/user-auth-guard/userauthguard.service';
import { AuthorsCarouselComponent } from '@shared/authors-carousel/authors-carousel.component';
import { DetailviewComponent } from './features/product-management/detailview/detailview.component';
import { ProductcompareComponent } from './features/product-management/productcompare/productcompare.component';
import { ContactComponent } from './features/user-management/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategyService } from '@services/selective-strategy.service';

const routes: Routes = [
  {
    path: 'creators',
    component: AuthorsCarouselComponent
  },
  {
    path: 'contactus',
    component: ContactComponent
  },
  {
    path: 'detailview',
    component: DetailviewComponent
  },
  {
    path: 'compare',
    component: ProductcompareComponent
  },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin-management/admin-management.module').then(
        (m) => m.AdminManagementModule
      ),
    canLoad: [AuthGaurdService]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth-management/auth-management.module').then((m) => m.AuthManagementModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./core/auth-management/auth-management.module').then((m) => m.AuthManagementModule)
  },
  {
    path: 'forgot_passoword',
    loadChildren: () =>
      import('./core/auth-management/auth-management.module').then((m) => m.AuthManagementModule)
  },
  {
    path: 'cart',
    data: { preload: true },
    loadChildren: () =>
      import('./features/cart-management/cart-management.module').then((m) => m.CartManagementModule),
    canLoad: [UserauthguardService]
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./features/cart-management/cart-management.module').then((m) => m.CartManagementModule),
    canLoad: [UserauthguardService]
  },
  {
    path: 'usersettings',
    data: { preload: true },
    loadChildren: () =>
      import('./features/user-management/user-management.module').then((m) => m.UserManagementModule),
    canLoad: [UserauthguardService]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'enabled',
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: SelectiveStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
