import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {CommandeAddComponent} from './commande-add/commande-add.component';
import {CommandeListComponent} from './commande-list/commande-list.component';

export const COMMANDE_ADD_ROUTES: Route = {
  path: 'commande/add',
  component: CommandeAddComponent,
  canActivate: [AuthGuardService]
};

export const COMMANDE_EDIT_ROUTES: Route = {
  path: 'commande/edit/:id',
  component: CommandeAddComponent,
  canActivate: [AuthGuardService]
};

export const COMMANDE_LIST_ROUTES: Route = {
  path: 'commande',
  component: CommandeListComponent,
  canActivate: [AuthGuardService]
};
