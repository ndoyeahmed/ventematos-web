import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CATEGORIE_ADD_ROUTES, CATEGORIE_EDIT_ROUTES, CATEGORIE_LIST_ROUTES} from './categorie/categorie.route';
import {PRODUIT_ADD_ROUTES, PRODUIT_EDIT_ROUTES, PRODUIT_LIST_ROUTES} from './produit/produit.route';
import {COMMANDE_ADD_ROUTES, COMMANDE_EDIT_ROUTES, COMMANDE_LIST_ROUTES} from './commande/commande.route';
import {PAIEMENT_ADD_ROUTES, PAIEMENT_EDIT_ROUTES, PAIEMENT_LIST_ROUTES} from './paiement/paiement.route';

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
      PAIEMENT_ADD_ROUTES,
      PAIEMENT_EDIT_ROUTES,
      PAIEMENT_LIST_ROUTES
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class SalesRouting {
}
