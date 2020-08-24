import {UtilisateurModel} from './utilisateur.model';
import {ProfilModel} from './profil.model';

export class ProfilUtilisateurModel {
  public id: number;
  public date: any;
  public utilisateur: UtilisateurModel;
  public profil: ProfilModel;
}
