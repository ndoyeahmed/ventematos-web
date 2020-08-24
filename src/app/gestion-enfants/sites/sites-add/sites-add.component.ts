import {Component, OnDestroy, OnInit} from '@angular/core';
import {SiteModel} from '../../../shared/models/gestion-enfants/site.model';
import {UtilisateurModel} from '../../../shared/models/admin/utilisateur.model';
import {MatSelectChange} from '@angular/material/select';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {UtilisateursService} from '../../../admin/services/utilisateurs.service';
import {InscriptionService} from '../../services/inscription.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sites-add',
  templateUrl: './sites-add.component.html',
  styleUrls: ['./sites-add.component.css']
})
export class SitesAddComponent implements OnInit, OnDestroy {
  SITE_ADD_SPINNER = 'site-add';
  site = new SiteModel();
  subscription = [] as Subscription[];
  utilisateur = new UtilisateurModel();
  utilisateurList = [] as UtilisateurModel[];

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private utilisateurService: UtilisateursService,
    private inscriptionService: InscriptionService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

  ngOnInit(): void {
    this.loadUtilisateur();
  }

  loadUtilisateur() {
    this.spinner.show(this.SITE_ADD_SPINNER);
    this.subscription.push(
      this.utilisateurService.listUtilisateursByArchiveAndStatut(false, true).subscribe(
        (data) => this.utilisateurList = data,
        (error) => {
          this.toast.error('Echec de chargement des données');
          this.spinner.hide(this.SITE_ADD_SPINNER);
        },
        () => {
          this.spinner.hide(this.SITE_ADD_SPINNER);
        }
      )
    );
  }

  onSelectedUser($event: MatSelectChange) {
    this.utilisateur = $event.value as UtilisateurModel;
  }

  addSite() {
    if (this.site && this.site.libelle && this.site.libelle !== ''
      && this.utilisateur && this.utilisateur.id) {
      this.site.utilisateur = this.utilisateur;
      this.spinner.show(this.SITE_ADD_SPINNER);
      this.subscription.push(
        this.inscriptionService.addSite(this.site).subscribe(
          (data) => {
            if (data && data.id) {
              this.toast.success();
            } else {
              this.toast.error();
            }
          },
          (error) => {
            this.spinner.hide(this.SITE_ADD_SPINNER);
            this.toast.error();
          },
          () => {
            this.spinner.hide(this.SITE_ADD_SPINNER);
            this.site = new SiteModel();
            this.utilisateur = new UtilisateurModel();
          }
        )
      );
    } else {
      this.toast.error('Remplir tous les champs SVP');
    }
  }
}
