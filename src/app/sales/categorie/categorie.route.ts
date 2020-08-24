import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';
import {CategorieListComponent} from './categorie-list/categorie-list.component';

export const CATEGORIE_ADD_ROUTES: Route = {
  path: 'categorie/add',
  component: CategorieAddComponent,
  canActivate: [AuthGuardService]
};

export const CATEGORIE_EDIT_ROUTES: Route = {
  path: 'categorie/edit/:id',
  component: CategorieAddComponent,
  canActivate: [AuthGuardService]
};

export const CATEGORIE_LIST_ROUTES: Route = {
  path: 'categorie',
  component: CategorieListComponent,
  canActivate: [AuthGuardService]
};

