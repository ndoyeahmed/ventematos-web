import {CommandeModel} from './commande.model';

export class ClientModel {
  public id: number;
  public matricule: string;
  public nom: string;
  public prenom: string;
  public telephone: string;
  public adresse: string;
  public archive: boolean;
  public nomComplet: string;
  public commandes: CommandeModel[];
}
