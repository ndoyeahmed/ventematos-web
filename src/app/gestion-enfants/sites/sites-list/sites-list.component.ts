import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SiteModel} from '../../../shared/models/gestion-enfants/site.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {InscriptionService} from '../../services/inscription.service';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit, OnDestroy {
  searchItem = '';
  SPINNER_NAME = 'site-list';
  subscription = [] as Subscription[];
  tabIndex: number;
  sitesList = [] as SiteModel[];
  sitesListFilterd = [] as SiteModel[];
  sitesListArchived = [] as SiteModel[];
  site: SiteModel;

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
    this.loadSites();
  }

  search() {

  }

  resetSearch() {

  }

  loadSites() {
    this.tabIndex = 1;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.inscriptionService.listSitesByConnectedUser(false).subscribe(
        (data) => {
          this.sitesList = data;
        },
        (error) => {
          this.toast.error('Erreur de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  loadSitesArchived() {
    this.tabIndex = 2;
    this.spinner.show(this.SPINNER_NAME);
    this.subscription.push(
      this.inscriptionService.listSitesByConnectedUser(true).subscribe(
        (data) => {
          this.sitesListArchived = data;
        },
        (error) => {
          this.toast.error('Erreur de chargement des données');
          this.spinner.hide(this.SPINNER_NAME);
        },
        () => {
          this.spinner.hide(this.SPINNER_NAME);
        }
      )
    );
  }

  onDelete(site: any) {
    this.site = site;
  }

  restore(site: any) {
    this.archiveOrRestoreSite(site, false);
  }

  delete() {
    this.archiveOrRestoreSite(this.site, true);
  }

  archiveOrRestoreSite(site: SiteModel, archive: boolean) {
    this.spinner.show(this.SPINNER_NAME);
    const body = {archive};
    this.subscription.push(
      this.inscriptionService.archiveSite(site.id, body).subscribe(
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
            this.loadSites();
          } else {
            this.loadSitesArchived();
          }
        }
      )
    );
  }
}
