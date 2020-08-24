import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UtilisateurModel} from '../../../shared/models/admin/utilisateur.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {UtilisateursService} from '../../services/utilisateurs.service';
import {ProfilModel} from '../../../shared/models/admin/profil.model';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-utilisateur-add',
  templateUrl: './utilisateur-add.component.html',
  styleUrls: ['./utilisateur-add.component.css']
})
export class UtilisateurAddComponent implements OnInit, OnDestroy {
  id: number;
  subscription = [] as Subscription[];
  SPINNER_NAME = 'module-form';
  utilisateur = new UtilisateurModel();
  profils = [] as ProfilModel[];
  profil: ProfilModel;

  // -------------- image upload variable --------------------------
  selectedFiles: FileList;
  url = '';
  // -------------- end image upload variable --------------------------

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toast: MyToastrService,
    private utilisateurService: UtilisateursService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.spinner.show(this.SPINNER_NAME);
      this.subscription.push(
        this.utilisateurService.getUserById(this.id).subscribe(
          (data) => {
            this.utilisateur = data;
            this.url = this.utilisateur.photo;
            this.profil = this.utilisateur.profilUtilisateurs[0].profil;
          },
          (error) => {
            console.log(error);
            this.toast.error('Erreur lors du chargement des données');
            this.spinner.hide(this.SPINNER_NAME);
          },
          () => this.spinner.hide(this.SPINNER_NAME)
        )
      );
    }

    this.subscription.push(
      this.utilisateurService.listProfils().subscribe(
        (data) => this.profils = data,
        (error) => this.toast.error('Erreur lors du chargement des profils')
      )
    );
  }

  save() {
    if (this.utilisateur.email && this.utilisateur.prenom
      && this.utilisateur.nom && this.utilisateur.telephone
      && this.profil) {
      this.spinner.show(this.SPINNER_NAME);

      // do mapping in json object
      const body = {
        nom: this.utilisateur.nom,
        prenom: this.utilisateur.prenom,
        email: this.utilisateur.email,
        telephone: this.utilisateur.telephone,
        adresse: this.utilisateur.adresse,
        photo: this.url,
        profil: this.profil.libelle
      };
      // save or update user and push the returned subscription into an array
      this.subscription.push(
        (this.id ? this.utilisateurService.updateUser(body, this.id)
          : this.utilisateurService.saveUtilisateur(body)).subscribe(
          (data) => {
            if (data.id) {
              this.toast.success();
            } else {
              this.toast.error();
            }
          },
          (error) => {
            this.spinner.hide(this.SPINNER_NAME);
            this.toast.error();
          }, () => {
            this.spinner.hide(this.SPINNER_NAME);
            this.clearForm();
          }
        )
      );
    }
  }

  clearForm() {
    this.utilisateur = new UtilisateurModel();
    this.profil = null;
    this.url = null;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFiles = event.target.files;
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event1: any) => { // called once readAsDataURL is completed
        this.url = event1.target.result;
      };
    }
  }

  public delete() {
    this.url = null;
  }


  onSelectedProfil($event: MatSelectChange) {
    this.profil = $event.value as ProfilModel;
  }
}
