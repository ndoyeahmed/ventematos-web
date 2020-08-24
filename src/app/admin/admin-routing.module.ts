import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UTILISATEUR_ADD_ROUTES, UTILISATEUR_EDIT_ROUTES, UTILISATEUR_LIST_ROUTES} from './utilisateur/utilisateur.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      UTILISATEUR_LIST_ROUTES,
      UTILISATEUR_ADD_ROUTES,
      UTILISATEUR_EDIT_ROUTES
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
