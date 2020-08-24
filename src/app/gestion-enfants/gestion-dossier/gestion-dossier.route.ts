import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {InscriptionComponent} from './inscription/inscription.component';
import {GestionDossierComponent} from './gestion-dossier/gestion-dossier.component';

export const INSCRIPTION_ROUTES: Route = {
  path: 'inscription',
  component: InscriptionComponent,
  canActivate: [AuthGuardService]
};

export const GESTION_DOSSIER_ROUTES: Route = {
  path: 'gestion-dossier',
  component: GestionDossierComponent,
  canActivate: [AuthGuardService]
};

export const AFFICHER_DOSSIER_ROUTES: Route = {
  path: 'afficher-dossier/:id',
  component: InscriptionComponent,
  canActivate: [AuthGuardService]
};
