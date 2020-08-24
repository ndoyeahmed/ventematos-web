import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
import {ClientModel} from '../../../shared/models/sales/client.model';
import {ProduitModel} from '../../../shared/models/sales/produit.model';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';
import {LineCommandeModel} from '../../../shared/models/sales/line-commande.model';
import {ProduitService} from '../../services/produit.service';
import {CommandeService} from '../../services/commande.service';
import {Subscription} from 'rxjs';
import {CommandeModel} from '../../../shared/models/sales/commande.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';

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
  dateLivraison: any;
  prixVenteInIntervalle = false;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private produitsService: ProduitService,
    private commandeService: CommandeService
  ) { }

  ngOnDestroy(): void {
        this.subscription.forEach(x => x.unsubscribe());
    }

  ngOnInit(): void {
    this.spinner.show(this.ADD_SPINNER);
    this.loadCategorie();
    this.loadClientList();
  }

  loadClientList() {
    this.subscription.push(this.commandeService.clientList(false).subscribe(
      (data) => this.clientList = data
    ));
  }

  loadCategorie() {
    this.subscription.push(
      this.produitsService.categorieList().subscribe(
        (data) => this.categorieList = data,
        (error) => console.log(error),
        () => this.spinner.hide(this.ADD_SPINNER)
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
    let lineCommande = this.lineCommandeList.filter(lc =>
    lc.produit.id === this.produit.id)[0];
    if (lineCommande) {
      lineCommande.quantite = Number(lineCommande.quantite) + Number(this.quantite);
    } else {
      lineCommande = new LineCommandeModel();
      lineCommande.quantite = Number(this.quantite);
      lineCommande.produit = this.produit;
      lineCommande.prixVenteUnitaire = this.prixvente;
      lineCommande.prixTotal = Number(this.quantite) * Number(this.prixvente);
      this.lineCommandeList.push(lineCommande);
    }
    this.quantite = 0;
    this.prixvente = 0;
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

  save() {
    this.spinner.show(this.ADD_SPINNER);
    const commande = new CommandeModel();
    commande.dateLivraison = this.dateLivraison;
    commande.client = this.client;
    this.lineCommandeList.forEach(lc => lc.commande = commande);

    this.subscription.push(
      this.commandeService.saveCommande(this.lineCommandeList).subscribe(
        (data) => {
          this.toast.success();
        }, (error) => {
          this.toast.error();
          this.spinner.hide(this.ADD_SPINNER);
        }, () => {
          this.clearAll();
          this.spinner.hide(this.ADD_SPINNER);
        }
      )
    );
  }

  deleteRow(id: number) {
    this.prixVenteInIntervalle = false;
    this.lineCommandeList.forEach(lc => {
      if (lc.produit.id === id) {
        this.lineCommandeList.splice(this.lineCommandeList.indexOf(lc), 1);
      }
    });
  }

  clearAll() {
    this.client = new ClientModel();
    this.categorie = new CategorieModel();
    this.produit = new ProduitModel();
    this.quantite = 0;
    this.prixvente = 0;
    this.lineCommandeList = [];
    this.dateLivraison = null;
    this.prixVenteInIntervalle = false;
  }

  onVerifyPrixVente($event) {
    if (this.produit && this.produit.id) {
      if (Number(this.prixvente) < Number(this.produit.prixMinimal)) {
        this.toast.warning('prix de vente inférieur au prix minimal');
        this.prixVenteInIntervalle = false;
      } else {
        this.prixVenteInIntervalle = true;
      }
    } else {
      this.toast.warning('Veuillez sélectionner un produit');
    }
  }
}
