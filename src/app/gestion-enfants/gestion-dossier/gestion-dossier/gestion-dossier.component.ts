import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DossierModel} from '../../../shared/models/gestion-enfants/dossier.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {InscriptionService} from '../../services/inscription.service';
import {DocumentModel} from '../../../shared/models/gestion-enfants/document.model';

@Component({
  selector: 'app-gestion-dossier',
  templateUrl: './gestion-dossier.component.html',
  styleUrls: ['./gestion-dossier.component.css']
})
export class GestionDossierComponent implements OnInit, OnDestroy {
  page = 1;
  previewUrl = '';
  searchItem = '';
  SPINNER_NAME = 'dossier-list';
  subscription = [] as Subscription[];
  tabIndex: number;

  dossierList = [] as DossierModel[];
  dossierListArchived = [] as DossierModel[];
  dossierListFilterd = [] as DossierModel[];
  dossier: DossierModel;

  documentList: DocumentModel[];
  documentListFilterd: DocumentModel[];

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private inscriptionService: InscriptionService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

  ngOnInit(): void {
    this.loadDossier();
  }

  search() {

  }

  resetSearch() {

  }

  loadDossierArchived() {
    this.tabIndex = 2;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.inscriptionService.listDossier(true).subscribe(
        (data) => {
          console.log(data);
          this.dossierListArchived = data;
        },
        (error) => {
          console.log(error);
          this.toast.error('Erreur de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  loadDossier() {
    this.tabIndex = 1;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.inscriptionService.listDossier(false).subscribe(
        (data) => {
          this.dossierList = data;
        },
        (error) => {
          console.log(error);
          this.toast.error('Erreur de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  onDelete(s: DossierModel) {

  }

  restore(s: DossierModel) {

  }

  delete() {

  }

  onDisplayDocumentList(s: DossierModel) {
    this.documentList = s.documents;
  }

  previewDoc(document: string) {
    this.previewUrl = document;
  }

  downloadDoc(doc: string, filename: string) {
    const linkSource = doc;
    const downloadLink = document.createElement('a');

    downloadLink.href = linkSource;
    downloadLink.download = filename;
    downloadLink.click();
  }

  printDoc(doc: string) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = doc;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }
}
