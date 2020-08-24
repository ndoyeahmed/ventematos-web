import {CommandeModel} from './commande.model';

export class FactureModel {
  public id: number;
  public numero: string;
  public montantAPayer: number;
  public montantRestant: number;
  public statut: number;
  public archive: boolean;
  public commande: CommandeModel;
}
