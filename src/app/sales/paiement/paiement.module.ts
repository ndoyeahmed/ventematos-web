import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaiementAddComponent } from './paiement-add/paiement-add.component';
import { PaiementListComponent } from './paiement-list/paiement-list.component';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [PaiementAddComponent, PaiementListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    NgxPaginationModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class PaiementModule { }
