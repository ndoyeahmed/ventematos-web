import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeDocumentModel} from '../../shared/models/gestion-enfants/type-document.model';
import {Observable} from 'rxjs';
import {DossierModel} from '../../shared/models/gestion-enfants/dossier.model';
import {SiteModel} from '../../shared/models/gestion-enfants/site.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  api = '/api/gestion/enfants/';

  constructor(
    private http: HttpClient
  ) {
  }

  saveTypeDocument(typeDocument: TypeDocumentModel): Observable<any> {
    return this.http.post(this.api + 'type-document', typeDocument);
  }

  listTypeDocument(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'type-document/archive/' + archive);
  }

  archiveTypeDocument(id: number, archive: any): Observable<any> {
    return this.http.put(this.api + 'type-document/archive/' + id, archive);
  }

  updateTypeDocument(id: number, body: any): Observable<any> {
    return this.http.put(this.api + 'type-document/' + id, body);
  }

  archiveSite(id: number, archive: any): Observable<any> {
    return this.http.put(this.api + 'sites/archive/' + id, archive);
  }

  typeDocumentById(id: number): Observable<any> {
    return this.http.get(this.api + 'type-document/' + id);
  }

  listSites(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'sites/archive/' + archive);
  }

  addSite(site: SiteModel): Observable<any> {
    return this.http.post(this.api + 'sites', site);
  }

  listSitesByConnectedUser(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'sites/connected-user/archive/' + archive);
  }

  inscription(dossier: DossierModel): Observable<any> {
    return this.http.post(this.api + 'inscription', dossier);
  }

  listDossier(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'dossiers/archive-utilisateur/' + archive);
  }

  dossierById(id: number): Observable<any> {
    return this.http.get(this.api + 'dossiers/id/' + id);
  }

  documentListByDossierId(id: number): Observable<any> {
    return this.http.get(this.api + 'documents/dossier/' + id);
  }

}
