import {Route} from '@angular/router';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {UtilisateurAddComponent} from './utilisateur-add/utilisateur-add.component';

export const UTILISATEUR_LIST_ROUTES: Route = {
  path: 'utilisateurs',
  component: UtilisateurComponent,
  canActivate: [AuthGuardService]
};

export const UTILISATEUR_ADD_ROUTES: Route = {
  path: 'utilisateurs-add',
  component: UtilisateurAddComponent,
  canActivate: [AuthGuardService]
};

export const UTILISATEUR_EDIT_ROUTES: Route = {
  path: 'utilisateurs-edit/:id',
  component: UtilisateurAddComponent,
  canActivate: [AuthGuardService]
};
