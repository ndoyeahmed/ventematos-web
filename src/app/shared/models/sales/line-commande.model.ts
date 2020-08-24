import {ProduitModel} from './produit.model';
import {CommandeModel} from './commande.model';

export class LineCommandeModel {
  public id: number;
  public prixVenteUnitaire: number;
  public prixTotal: number;
  public quantite: number;
  public produit: ProduitModel;
  public commande: CommandeModel;
}
