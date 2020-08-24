import {UtilisateurModel} from '../admin/utilisateur.model';

export class SiteModel {
  public id: number;
  public code: string;
  public libelle: string;
  public archive: boolean;
  public utilisateur: UtilisateurModel;
}
