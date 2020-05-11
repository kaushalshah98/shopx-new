import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsCarouselComponent } from '@shared/authors-carousel/authors-carousel.component';
import { ContactComponent } from 'src/app/features/user-management/contact/contact.component';
import { ForgotPasswordComponent } from 'src/app/features/user-management/forgot-password/forgot-password.component';
import { RegisterComponent } from 'src/app/features/user-management/register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '#',
    component: RegisterComponent
  },
  {
    path: '&',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthManagementRoutingModule {}
