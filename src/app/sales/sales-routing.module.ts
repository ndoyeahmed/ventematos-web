import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CATEGORIE_ADD_ROUTES, CATEGORIE_EDIT_ROUTES, CATEGORIE_LIST_ROUTES} from './categorie/categorie.route';
import {PRODUIT_ADD_ROUTES, PRODUIT_EDIT_ROUTES, PRODUIT_LIST_ROUTES} from './produit/produit.route';
import {COMMANDE_ADD_ROUTES, COMMANDE_EDIT_ROUTES, COMMANDE_LIST_ROUTES} from './commande/commande.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      CATEGORIE_ADD_ROUTES,
      CATEGORIE_EDIT_ROUTES,
      CATEGORIE_LIST_ROUTES,
      PRODUIT_ADD_ROUTES,
      PRODUIT_EDIT_ROUTES,
      PRODUIT_LIST_ROUTES,
      COMMANDE_ADD_ROUTES,
      COMMANDE_EDIT_ROUTES,
      COMMANDE_LIST_ROUTES,
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class SalesRouting {
}
