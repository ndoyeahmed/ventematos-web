import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';
import {ProduitService} from '../../services/produit.service';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.css']
})
export class CategorieAddComponent implements OnInit, OnDestroy {

  CATEGORIE_ADD_SPINNER = 'categorie-add';
  subscription = [] as Subscription[];
  categorie = new CategorieModel();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private produitsService: ProduitService
  ) { }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

  ngOnInit(): void {
  }

  add() {
    if (this.categorie && this.categorie.libelle && this.categorie.libelle.trim() !== '') {
      this.spinner.show(this.CATEGORIE_ADD_SPINNER);
      this.subscription.push(
        this.produitsService.saveCategorie(this.categorie).subscribe(
          (data) => console.log('success'),
          (error) => {
            this.toast.error(error.error.message);
            this.spinner.hide(this.CATEGORIE_ADD_SPINNER);
            },
          () => {
            this.toast.success();
            this.spinner.hide(this.CATEGORIE_ADD_SPINNER);
            this.categorie = new CategorieModel();
          }
      ));
    } else {
      this.toast.warning('Remplir tous les champs SVP');
    }
  }
}
