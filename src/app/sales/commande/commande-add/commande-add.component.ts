import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
import {ClientModel} from '../../../shared/models/sales/client.model';
import {ProduitModel} from '../../../shared/models/sales/produit.model';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';
import {LineCommandeModel} from '../../../shared/models/sales/line-commande.model';
import {ProduitService} from '../../services/produit.service';
import {CommandeService} from '../../services/commande.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-commande-add',
  templateUrl: './commande-add.component.html',
  styleUrls: ['./commande-add.component.css']
})
export class CommandeAddComponent implements OnInit, OnDestroy {
  ADD_SPINNER = 'spinner_add';
  client = new ClientModel();
  clientList = [] as ClientModel[];
  produitList = [] as ProduitModel[];
  produit = new ProduitModel();
  quantite: number;
  prixvente: number;
  categorieList = [] as CategorieModel[];
  categorie = new CategorieModel();
  lineCommandeList = [] as LineCommandeModel[];
  subscription = [] as Subscription[];

  constructor(
    private produitsService: ProduitService,
    private commandeService: CommandeService
  ) { }

  ngOnDestroy(): void {
        this.subscription.forEach(x => x.unsubscribe());
    }

  ngOnInit(): void {
    this.loadCategorie();
    this.loadClientList();
  }

  loadClientList() {
    this.subscription.push(this.commandeService.clientList().subscribe(
      (data) => this.clientList = data
    ));
  }

  loadCategorie() {
    this.subscription.push(
      this.produitsService.categorieList().subscribe(
        (data) => this.categorieList = data,
        (error) => console.log(error)
      )
    );
  }

  loadProduit(categorieId) {
    this.subscription.push(
      this.produitsService.produitListByCategorie(categorieId).subscribe(
        (data) => this.produitList = data
      )
    );
  }

  add() {
    // TODO
  }

  onSelectedClient($event: MatSelectChange) {
    this.client = $event.value as ClientModel;
  }

  onSelectedProduit($event: MatSelectChange) {
    this.produit = $event.value as ProduitModel;
  }

  onSelectedCategorie($event: MatSelectChange) {
    this.categorie = $event.value as CategorieModel;
    this.loadProduit(this.categorie.id);
  }
}
