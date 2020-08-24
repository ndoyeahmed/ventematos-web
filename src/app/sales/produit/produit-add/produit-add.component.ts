import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {ProduitService} from '../../services/produit.service';
import {ProduitModel} from '../../../shared/models/sales/produit.model';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit, OnDestroy {

  isEdit: boolean;
  isAdd: boolean;
  url = '';

  ADD_SPINNER = 'add';
  subscription = [] as Subscription[];
  produit = new ProduitModel();
  categorie = new CategorieModel();
  categorieList = [] as CategorieModel[];

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private produitsService: ProduitService
  ) { }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.subscription.push(
      this.produitsService.categorieList().subscribe(
        (data) => this.categorieList = data,
        (error) => this.toast.error('Echec chargement liste des catégories')
      )
    );
  }

  add() {
    if (this.categorie && this.categorie.id && this.url) {
      if (this.produit && this.produit.libelle && this.produit.quantiteStock
        && this.produit.prixMinimal && this.produit.prixNormal) {
        this.spinner.show(this.ADD_SPINNER);
        this.produit.categorie = this.categorie;
        this.produit.image = this.url;
        this.subscription.push(
          this.produitsService.saveProduit(this.produit).subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              this.spinner.hide(this.ADD_SPINNER);
              this.toast.error();
            },
            () => {
              this.spinner.hide(this.ADD_SPINNER);
              this.toast.success();
            }
          )
        );
      } else {
        this.toast.error('Veuillez remplir tous les champs SVP');
      }
    } else {
      this.toast.error('Veuillez remplir tous les champs SVP');
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event1: any) => { // called once readAsDataURL is completed
          this.url = event1.target.result;
        };
      } else {
        this.toast.error('Type du fichier non valide. Veuillez choisir un fichier au format PNG ou JPEG ou JPG SVP');
      }
    }
  }

  public delete() {
    this.url = null;
  }

  onSelectedCategorie($event: MatSelectChange) {
    this.categorie = $event.value as CategorieModel;
  }
}
