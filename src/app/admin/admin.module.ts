import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UtilisateurComponent} from './utilisateur/utilisateur/utilisateur.component';
import {UtilisateurAddComponent} from './utilisateur/utilisateur-add/utilisateur-add.component';
import {MatCardModule} from '@angular/material/card';
import {NgxSelectModule} from 'ngx-select-ex';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [UtilisateurComponent, UtilisateurAddComponent],
  imports: [
    AdminRoutingModule,
    SharedModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule,
    NgxSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AdminModule { }
