import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {LOGIN_ROUTE} from './login/login.route';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RESET_PASSWORD} from './reset-password/reset-password.route';

const routes: Routes = [
  LOGIN_ROUTE,
  RESET_PASSWORD
];


@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class AccountModule {
}
