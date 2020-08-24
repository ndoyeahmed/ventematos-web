import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TypeDocumentModel} from '../../../shared/models/gestion-enfants/type-document.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {InscriptionService} from '../../services/inscription.service';

@Component({
  selector: 'app-type-document-list',
  templateUrl: './type-document-list.component.html',
  styleUrls: ['./type-document-list.component.css']
})
export class TypeDocumentListComponent implements OnInit, OnDestroy {
  searchItem = '';
  SPINNER_NAME = 'type-doc-list';
  subscription = [] as Subscription[];
  tabIndex: number;

  typeDocumentList = [] as TypeDocumentModel[];
  typeDocumentListArchived = [] as TypeDocumentModel[];
  typeDocumentListFilterd = [] as TypeDocumentModel[];
  typeDocument: TypeDocumentModel;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private inscriptionService: InscriptionService
  ) { }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

  ngOnInit(): void {
    this.loadTypeDocument();
  }

  loadTypeDocument() {
    this.tabIndex = 1;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.inscriptionService.listTypeDocument(false).subscribe(
        (data) => this.typeDocumentList = data,
        (error) => {
          this.toast.error('Echec de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => this.spinner.hide(this.SPINNER_NAME)
      )
    );
  }

  loadTypeDocumentArchived() {
    this.tabIndex = 2;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.inscriptionService.listTypeDocument(true).subscribe(
        (data) => this.typeDocumentListArchived = data,
        (error) => {
          this.toast.error('Echec de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => this.spinner.hide(this.SPINNER_NAME)
      )
    );
  }

  delete() {
    this.archiveOrRestoreTypeDocument(this.typeDocument, true);
  }

  onDelete(typeDoc: TypeDocumentModel) {
    this.typeDocument = typeDoc;
  }

  archiveOrRestoreTypeDocument(typeDoc: TypeDocumentModel, archive: boolean) {
    this.spinner.show(this.SPINNER_NAME);
    const body = { archive};
    this.subscription.push(
      this.inscriptionService.archiveTypeDocument(typeDoc.id, body).subscribe(
        (data) => {
          this.toast.success();
        },
        (error) => {
          this.spinner.hide(this.SPINNER_NAME);
          this.toast.error();
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
          if (this.tabIndex === 1) {
            this.loadTypeDocument();
          } else {
            this.loadTypeDocumentArchived();
          }
        }
      )
    );
  }

  restore(typeDoc: TypeDocumentModel) {
    this.archiveOrRestoreTypeDocument(typeDoc, false);
  }

  search() {

  }

  resetSearch() {

  }
}
