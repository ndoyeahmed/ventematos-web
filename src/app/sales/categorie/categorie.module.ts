import { NgModule } from '@angular/core';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [CategorieAddComponent, CategorieListComponent],
  imports: [
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    NgxPaginationModule
  ]
})
export class CategorieModule { }
