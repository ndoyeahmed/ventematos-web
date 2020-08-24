import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/auth/authentication.service';
import {UtilisateursService} from '../../admin/services/utilisateurs.service';
import {UtilisateurModel} from '../../shared/models/admin/utilisateur.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  progressbar = false;
  err = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private utilisateurService: UtilisateursService
  ) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  changePassword() {
    const val = this.form.value;
    if (val.password && val.confirmPassword) {
      if (val.password === val.confirmPassword) {
        this.progressbar = true;
        this.utilisateurService.resetPassword(val).subscribe(
          (data) => {
            this.auth.logout();
          }, (error) => {
            console.log(error);
          }
        );
      } else {
        this.err = 'Les mots de passe ne sont pas identiques';
      }
    } else {
      this.err = 'Remplir tous les champs SVP';
    }
  }
}
