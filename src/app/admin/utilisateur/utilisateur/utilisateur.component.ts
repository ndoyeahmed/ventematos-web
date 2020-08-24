import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilisateurModel} from '../../../shared/models/admin/utilisateur.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {UtilisateursService} from '../../services/utilisateurs.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit, OnDestroy {
  utilisateurs = [] as UtilisateurModel[];
  utilisateurFiltered = [] as UtilisateurModel[];
  utilisateurArchived = [] as UtilisateurModel[];
  SPINNER_NAME = 'utilisateur-list';
  searchItem = '';
  subscription = [] as Subscription[];
  tabIndex: number;
  utilisateur: UtilisateurModel;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private utilisateurService: UtilisateursService
  ) { }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
    }

  ngOnInit(): void {
    this.loadUtilisateurs();
  }

  loadUtilisateursArchived() {
    this.tabIndex = 2;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.utilisateurService.listUtilisateurs(true).subscribe(
        (data) => this.utilisateurArchived = data,
        (error) => {
          this.toast.error('Echec de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  loadUtilisateurs() {
    this.tabIndex = 1;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.utilisateurService.listUtilisateurs(false).subscribe(
        (data) => this.utilisateurs = data,
        (error) => {
          this.toast.error('Echec de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  delete() {
    this.updateStatusUser(true, null, this.utilisateur.id);
  }

  updateStatusUser(archive: any, statut: any, id: number) {
    const body = {
      archive,
      statut,
    };
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.utilisateurService.updateUserStatus(body, id).subscribe(
        (data) => {
          this.toast.success();
        },
        (error) => {
          this.spinner.hide(this.SPINNER_NAME);
          this.toast.error();
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
          if (this.tabIndex === 1) {
            this.loadUtilisateurs();
          } else {
            this.loadUtilisateursArchived();
          }
        }
      )
    );
  }

  onActive(u: UtilisateurModel) {
    this.updateStatusUser(null, true, u.id);
  }

  onDesactive(u: UtilisateurModel) {
    this.updateStatusUser(null, false, u.id);
  }

  onDelete(u: UtilisateurModel) {
    this.utilisateur = u;
  }

  restore(u: UtilisateurModel) {
    this.updateStatusUser(false, null, u.id);
  }

  search() {

  }

  resetSearch() {

  }
}
