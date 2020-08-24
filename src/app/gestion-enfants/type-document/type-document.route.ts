import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {TypeDocumentAddComponent} from './type-document-add/type-document-add.component';
import {TypeDocumentListComponent} from './type-document-list/type-document-list.component';

export const TYPE_DOCUMENT_ADD_ROUTES: Route = {
  path: 'type-document/add',
  component: TypeDocumentAddComponent,
  canActivate: [AuthGuardService]
};

export const TYPE_DOCUMENT_EDIT_ROUTES: Route = {
  path: 'type-document/edit/:id',
  component: TypeDocumentAddComponent,
  canActivate: [AuthGuardService]
};

export const TYPE_DOCUMENT_LIST_ROUTES: Route = {
  path: 'type-document',
  component: TypeDocumentListComponent,
  canActivate: [AuthGuardService]
};

