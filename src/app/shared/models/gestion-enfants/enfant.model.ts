import {SiteModel} from './site.model';
import {DossierModel} from './dossier.model';

export class EnfantModel {
  public id: number;
  public matricule: string;
  public photo: string;
  public nom: string;
  public prenom: string;
  public adresse: string;
  public telephone: string;
  public genre: string;
  public dateNaissance: any;
  public archive: boolean;
  public site: SiteModel;
}
