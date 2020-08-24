import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {ProduitService} from '../../services/produit.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit, OnDestroy {
  searchItem = '';
  SPINNER_NAME = 'categorie-list';
  subscription = [] as Subscription[];
  tabIndex: number;
  categorieList = [] as CategorieModel[];
  categorieListFilterd = [] as CategorieModel[];
  categorieListArchived = [] as CategorieModel[];
  categorie: CategorieModel;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private produitsService: ProduitService
  ) { }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.loadCategorie();
  }

  search() {

  }

  resetSearch() {

  }

  loadCategorie() {
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.produitsService.categorieList().subscribe(
        (data) => {
          this.categorieList = data;
        }, (error) => {
          this.toast.error('Echec chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        }, () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  loadCategorieArchived() {
  }

  onDelete(s: CategorieModel) {
  }

  restore(s: CategorieModel) {
  }

  delete() {

  }
}
