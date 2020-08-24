import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HasAnyAuthorityDirective} from './auth/has-any-authority.directive';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthenticationService} from './auth/authentication.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthExpiredInterceptorService} from './auth/auth-expired-interceptor.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MyToastrService} from './my-toastr/my-toastr.service';
import {MaterialElevationDirective} from './material-elevation.directive';


@NgModule({
  declarations: [HasAnyAuthorityDirective, MaterialElevationDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    MaterialElevationDirective,
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    MyToastrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptorService,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}
