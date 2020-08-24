import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import * as moment from 'moment';
import {Observable, of} from 'rxjs';
import * as CryptoJS from 'crypto-js';
import {UtilisateurModel} from '../models/admin/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  SECRET = 'immoERP';
  errCon = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
  }

  async login(credentials: any) {
    await this.http.post<any>('/api/login', credentials).toPromise()
      .then((data) => {
        this.setSession(data).then(x => {
          this.identity().subscribe((user) => {
            if (user.passwordChange) {
              this.storeUser(user)
                .then(() => {
                  this.router.navigate(['/admin/utilisateurs']);
                });
            } else {
              this.router.navigate(['/reset-password']);
            }
          }, (error) => console.log(error));
        });
      }).catch((error1) => this.errCon = true);
    return this.errCon;
  }

  async setSession(authResult) {
    const expiresAt = moment().add(authResult.expires_at, 'second');

    this.storage.store('id_token', authResult.id_token);
    this.storage.store('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  async storeUser(user: UtilisateurModel) {
    this.storage.store('mdd_user', this.convertText('encrypt', user));
  }

  token(key: string): string {
    return this.storage.retrieve(key);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = this.storage.retrieve('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  logout() {
    this.storage.clear('id_token');
    this.storage.clear('expires_at');
    this.storage.clear('mdd_user');
    this.router.navigate(['/login']);
  }

  identity(): Observable<any> {
    const result = this.storage.retrieve('mdd_user');
    if (this.isLoggedIn() && result) {
      return of(this.convertText('decrypt', result));
    } else if (this.isLoggedIn()) {
      return this.http.get('/api/connected-user');
    }
  }

  convertText(conversion: string, user: any) {
    if (conversion === 'encrypt') {
      return CryptoJS.AES.encrypt(JSON.stringify(user).trim(), this.SECRET.trim()).toString();
    } else {
      const bytes = CryptoJS.AES.decrypt(user, this.SECRET.trim());
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
    }
  }

  hasAnyAuthority(authorities: string[], user: UtilisateurModel): boolean {
    for (const authority of authorities) {
      const profilUtilisateur = user.profilUtilisateurs.filter(x => x.profil.libelle === authority);
      if (profilUtilisateur) {
        return true;
      }
    }
    return false;
  }
}
