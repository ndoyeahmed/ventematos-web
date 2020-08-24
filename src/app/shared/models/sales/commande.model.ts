import {ClientModel} from './client.model';

export class CommandeModel {
  public id: number;
  public code: string;
  public dateCommande: any;
  public dateLivraison: any;
  public statut: number;
  public archive: boolean;
  public client: ClientModel;
}
