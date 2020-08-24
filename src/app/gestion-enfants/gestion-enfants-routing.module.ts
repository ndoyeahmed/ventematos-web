import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TYPE_DOCUMENT_ADD_ROUTES, TYPE_DOCUMENT_EDIT_ROUTES, TYPE_DOCUMENT_LIST_ROUTES} from './type-document/type-document.route';
import {AFFICHER_DOSSIER_ROUTES, GESTION_DOSSIER_ROUTES, INSCRIPTION_ROUTES} from './gestion-dossier/gestion-dossier.route';
import {SITES_ADD_ROUTES, SITES_EDIT_ROUTES, SITES_LIST_ROUTES} from './sites/sites.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      TYPE_DOCUMENT_ADD_ROUTES,
      TYPE_DOCUMENT_EDIT_ROUTES,
      TYPE_DOCUMENT_LIST_ROUTES,
      INSCRIPTION_ROUTES,
      GESTION_DOSSIER_ROUTES,
      SITES_ADD_ROUTES,
      SITES_EDIT_ROUTES,
      SITES_LIST_ROUTES,
      AFFICHER_DOSSIER_ROUTES
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class GestionEnfantsRouting {
}
