import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitAddComponent } from './produit-add/produit-add.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [ProduitAddComponent, ProduitListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    NgxPaginationModule,
    MatSelectModule
  ]
})
export class ProduitModule { }
