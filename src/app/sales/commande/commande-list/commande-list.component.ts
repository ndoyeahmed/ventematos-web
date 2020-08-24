import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {CommandeService} from '../../services/commande.service';
import {CommandeModel} from '../../../shared/models/sales/commande.model';
import {LineCommandeModel} from '../../../shared/models/sales/line-commande.model';
import * as moment from 'moment';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit, OnDestroy {
  searchItem = '';
  SPINNER_NAME = 'categorie-list';
  subscription = [] as Subscription[];
  tabIndex: number;
  commandeList = [] as CommandeModel[];
  commandeListValid = [] as CommandeModel[];
  commandeListFilterd = [] as CommandeModel[];
  commandeListArchived = [] as CommandeModel[];
  lineCommandeList = [] as LineCommandeModel[];
  constructor(private spinner: NgxSpinnerService,
              private toast: MyToastrService,
              private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.loadCommandeEnCours();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  search() {

  }

  resetSearch() {

  }

  loadCommandeEnCours() {
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.commandeService.commandeList(false, 0).subscribe(
        (data) => this.commandeList = data,
        (error) => {
          this.spinner.hide(this.SPINNER_NAME);
          this.toast.error('Erreur chargement des données');
        }, () => this.spinner.hide(this.SPINNER_NAME)
      )
    );
  }

  loadCommandeValider() {
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.commandeService.commandeList(false, 1).subscribe(
        (data) => this.commandeList = data,
        (error) => {
          this.spinner.hide(this.SPINNER_NAME);
          this.toast.error('Erreur chargement des données');
        }, () => this.spinner.hide(this.SPINNER_NAME)
      )
    );
  }

  loadCommandeArchived() {
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.commandeService.commandeList(true, 0).subscribe(
        (data) => this.commandeList = data,
        (error) => {
          this.spinner.hide(this.SPINNER_NAME);
          this.toast.error('Erreur chargement des données');
        },
        () => {
          this.subscription.push(
            this.commandeService.commandeList(true, 1).subscribe(
              (data) => this.commandeList.push(...data),
              (error) => console.log(error),
              () => this.spinner.hide(this.SPINNER_NAME)
            )
          );
        }
      )
    );
  }

  delete() {

  }

  onDelete(s: CommandeModel) {

  }

  onShowDetails(id: number) {
    this.subscription.push(
      this.commandeService.lineCommandeListByCommande(id).subscribe(
        (data) => this.lineCommandeList = data,
        (error) => console.log(error)
      )
    );
  }

  onShowFacture(id: number) {

  }
}
