import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthenticationService} from './authentication.service';
import {UtilisateurModel} from '../models/admin/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  userConnected: UtilisateurModel;
  constructor(
    private storage: LocalStorageService,
    private auth: AuthenticationService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authorities: string[] = route.data.authorities;
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return (!authorities || authorities.length === 0) ? true : this.checkProfil(authorities);
    }
  }

  checkProfil(authorities: string[]): Promise<boolean> {
    return Promise.resolve(this.auth.identity().toPromise().then((user) => {
      if (user && this.auth.hasAnyAuthority(authorities, user)) {
        return true;
      }
      this.router.navigate(['/admin/utilisateurs']);
      return false;
    }));
  }
}
