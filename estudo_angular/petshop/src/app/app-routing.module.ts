import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProdutsPageComponent } from './pages/store/produts-page/produts-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { PestPageComponentComponent } from './pages/account/pets-page-component/pets-page-component.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: '', component: ProdutsPageComponent},
      {path: 'cart', component: CartPageComponent}
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      {path: 'pets', component: PestPageComponentComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: ResetPasswordPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
