import { NgModule } from '@angular/core';
import {SalesRouting} from './sales-routing.module';
import {CategorieModule} from './categorie/categorie.module';
import {ProduitModule} from './produit/produit.module';
import {CommandeModule} from './commande/commande.module';
import {PaiementModule} from './paiement/paiement.module';


@NgModule({
  declarations: [],
  imports: [
    CategorieModule,
    ProduitModule,
    SalesRouting,
    CommandeModule,
    PaiementModule
  ]
})
export class SalesModule { }
