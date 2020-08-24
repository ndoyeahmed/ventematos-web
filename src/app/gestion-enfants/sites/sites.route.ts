import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {SitesAddComponent} from './sites-add/sites-add.component';
import {SitesListComponent} from './sites-list/sites-list.component';

export const SITES_ADD_ROUTES: Route = {
  path: 'sites/add',
  component: SitesAddComponent,
  canActivate: [AuthGuardService]
};

export const SITES_EDIT_ROUTES: Route = {
  path: 'sites/edit/:id',
  component: SitesAddComponent,
  canActivate: [AuthGuardService]
};

export const SITES_LIST_ROUTES: Route = {
  path: 'sites',
  component: SitesListComponent,
  canActivate: [AuthGuardService]
};
