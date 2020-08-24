import {EnfantModel} from './enfant.model';
import {DocumentModel} from './document.model';

export class DossierModel {
  public id: number;
  public code: string;
  public libelle: string;
  public archive: boolean;
  public nombreDocAFournir: number;
  public nombreDocFournis: number;
  public enfant: EnfantModel;
  public documents: DocumentModel[];
}
