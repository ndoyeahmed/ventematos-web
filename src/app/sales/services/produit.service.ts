import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategorieModel} from '../../shared/models/sales/categorie.model';
import {Observable} from 'rxjs';
import {ProduitModel} from '../../shared/models/sales/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  api = '/api/sales/';
  constructor(private http: HttpClient) { }

  saveCategorie(categorie: CategorieModel): Observable<any> {
    return this.http.post(this.api + 'categories', categorie);
  }

  categorieList(): Observable<any> {
    return this.http.get(this.api + 'categories');
  }

  saveProduit(produit: ProduitModel): Observable<any> {
    return this.http.post(this.api + 'produits', produit);
  }

  produitListByCategorie(categorieId: number): Observable<any> {
    return this.http.get(this.api + 'produits/categorie/' + categorieId);
  }

  produitsList(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'produits/archive/' + archive);
  }
}
