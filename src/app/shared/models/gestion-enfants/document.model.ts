import {DossierModel} from './dossier.model';
import {TypeDocumentModel} from './type-document.model';

export class DocumentModel {
  public id: number;
  public code: string;
  public libelle: string;
  public document: string;
  public archive: boolean;
  public typeDocument: TypeDocumentModel;
}
