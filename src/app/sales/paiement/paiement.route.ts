import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {PaiementAddComponent} from './paiement-add/paiement-add.component';
import {PaiementListComponent} from './paiement-list/paiement-list.component';

export const PAIEMENT_ADD_ROUTES: Route = {
  path: 'paiement/add',
  component: PaiementAddComponent,
  canActivate: [AuthGuardService]
};

export const PAIEMENT_EDIT_ROUTES: Route = {
  path: 'paiement/edit/:id',
  component: PaiementAddComponent,
  canActivate: [AuthGuardService]
};

export const PAIEMENT_LIST_ROUTES: Route = {
  path: 'paiement',
  component: PaiementListComponent,
  canActivate: [AuthGuardService]
};

