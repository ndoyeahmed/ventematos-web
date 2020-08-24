import {FactureModel} from './facture.model';

export class PaiementModel {
  public id: number;
  public datePaiement: any;
  public montant: number;
  public facture: FactureModel;
}
