import {Component, OnInit} from '@angular/core';
import {UtilisateurModel} from '../../shared/models/admin/utilisateur.model';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthenticationService} from '../../shared/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser: UtilisateurModel;

  constructor(
    private storage: LocalStorageService,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.connectedUser = this.auth
      .convertText('decrypt', this.storage.retrieve('mdd_user'));
  }

  logout() {
    this.auth.logout();
  }
}
