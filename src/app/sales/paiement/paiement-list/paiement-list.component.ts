import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {PaiementModel} from '../../../shared/models/sales/paiement.model';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.css']
})
export class PaiementListComponent implements OnInit {

  searchItem = '';
  SPINNER_NAME = 'paiement-list';
  subscription = [] as Subscription[];
  tabIndex: number;
  paiementList = [] as PaiementModel[];
  paiementListFilterd = [] as PaiementModel[];
  paiementListArchived = [] as PaiementModel[];

  constructor() { }

  ngOnInit(): void {
  }

  delete() {

  }

  search() {

  }

  resetSearch() {

  }

  loadPaiement() {

  }

  loadPaiementArchived() {

  }
}
