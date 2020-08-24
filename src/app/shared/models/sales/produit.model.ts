import {CategorieModel} from './categorie.model';

export class ProduitModel {
  public id: number;
  public code: string;
  public libelle: string;
  public description: string;
  public quantiteStock: number;
  public prixNormal: number;
  public prixMinimal: number;
  public archive: boolean;
  public image: string;
  public categorie: CategorieModel;
}
