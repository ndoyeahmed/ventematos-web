import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {ProduitAddComponent} from './produit-add/produit-add.component';
import {ProduitListComponent} from './produit-list/produit-list.component';

export const PRODUIT_ADD_ROUTES: Route = {
  path: 'produit/add',
  component: ProduitAddComponent,
  canActivate: [AuthGuardService]
};

export const PRODUIT_EDIT_ROUTES: Route = {
  path: 'produit/edit/:id',
  component: ProduitAddComponent,
  canActivate: [AuthGuardService]
};

export const PRODUIT_LIST_ROUTES: Route = {
  path: 'produit',
  component: ProduitListComponent,
  canActivate: [AuthGuardService]
};
