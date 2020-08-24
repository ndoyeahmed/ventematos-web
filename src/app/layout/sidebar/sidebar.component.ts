import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthenticationService} from '../../shared/auth/authentication.service';
import {UtilisateurModel} from '../../shared/models/admin/utilisateur.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  connectedUser: UtilisateurModel;

  constructor(
    private storage: LocalStorageService,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.connectedUser = this.auth
      .convertText('decrypt', this.storage.retrieve('mdd_user'));

    // @ts-ignore
    $(document).ready(() => {
      // @ts-ignore
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
