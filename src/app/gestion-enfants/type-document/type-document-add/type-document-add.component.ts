import {Component, OnDestroy, OnInit} from '@angular/core';
import {TypeDocumentModel} from '../../../shared/models/gestion-enfants/type-document.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {Subscription} from 'rxjs';
import {InscriptionService} from '../../services/inscription.service';

@Component({
  selector: 'app-type-document-add',
  templateUrl: './type-document-add.component.html',
  styleUrls: ['./type-document-add.component.css']
})
export class TypeDocumentAddComponent implements OnInit, OnDestroy {
  id: number;
  subscription = [] as Subscription[];
  SPINNER_NAME = 'type-doc-form';
  typeDocument = new TypeDocumentModel();

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toast: MyToastrService,
    private inscriptionService: InscriptionService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.spinner.show(this.SPINNER_NAME);
      this.subscription.push(
        this.inscriptionService.typeDocumentById(this.id).subscribe(
          (data) => {
            this.typeDocument = data;
          },
          (error) => {
            console.log(error);
            this.toast.error('Erreur lors du chargement des données');
            this.spinner.hide(this.SPINNER_NAME);
          },
          () => this.spinner.hide(this.SPINNER_NAME)
        )
      );
    }
  }

  save() {
    if (this.typeDocument && this.typeDocument.libelle && this.typeDocument.libelle.trim() !== '') {
      this.spinner.show(this.SPINNER_NAME);
      this.subscription.push(
        (this.id && this.id !== 0 ? this.inscriptionService.updateTypeDocument(this.id, this.typeDocument)
          : this.inscriptionService.saveTypeDocument(this.typeDocument))
          .subscribe(
          (data) => {
            if (data && data.id) {
              this.toast.success();
            } else {
              this.toast.error();
            }
          },
          (error) => {
            this.spinner.hide(this.SPINNER_NAME);
            this.toast.error();
          },
          () => {
            this.spinner.hide(this.SPINNER_NAME);
            this.typeDocument = new TypeDocumentModel();
          }
        )
      );
    } else {
      this.toast.error('Remplir tous les champs SVP');
    }
  }
}
