import {ProfilUtilisateurModel} from './profil-utilisateur.model';

export class UtilisateurModel {
  public id: number;
  public login: string;
  public nom: string;
  public prenom: string;
  public telephone: string;
  public email: string;
  public adresse: string;
  public statut: boolean;
  public archive: boolean;
  public passwordChange: boolean;
  public photo: string;
  public authorities: string[];
  public profilUtilisateurs: ProfilUtilisateurModel[];
}
