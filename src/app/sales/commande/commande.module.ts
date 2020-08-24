import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeAddComponent } from './commande-add/commande-add.component';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CommandeListComponent } from './commande-list/commande-list.component';



@NgModule({
  declarations: [CommandeAddComponent, CommandeListComponent],
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
export class CommandeModule { }
