import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  api = '/api';

  constructor(
    private http: HttpClient
  ) {
  }

  listUtilisateurs(archive: boolean = false): Observable<any> {
    return this.http.get(this.api + '/utilisateurs/' + archive);
  }

  listUtilisateursByArchiveAndStatut(archive: boolean, statut: boolean): Observable<any> {
    return this.http.get(this.api + '/utilisateurs/archive-statut/' + archive + '/' + statut);
  }

  saveUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.api + '/utilisateurs', utilisateur);
  }

  listProfils(): Observable<any> {
    return this.http.get(this.api + '/profils');
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.api + '/utilisateurs-by-id/' + id);
  }

  updateUser(body: any, id: number): Observable<any> {
    return this.http.put(this.api + '/utilisateurs/' + id, body);
  }

  updateUserStatus(body: any, id: number): Observable<any> {
    return this.http.put(this.api + '/utilisateurs-status/' + id, body);
  }

  resetPassword(body: any): Observable<any> {
    return this.http.post(this.api + '/reset-password', body);
  }
}
