import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  // j'ai deja configurer l'url base de l'api donc
  // ici j'ajoute seulement les urls des controller
  api = '/api/sales/';
  constructor(private http: HttpClient) { }

  saveCommande(commande: any): Observable<any> {
    return this.http.post(this.api + '', commande);
  }

  clientList(): Observable<any> {
    return this.http.get(this.api + '');
  }
}
