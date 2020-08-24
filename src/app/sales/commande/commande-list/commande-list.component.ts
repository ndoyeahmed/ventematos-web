import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  searchItem = '';
  SPINNER_NAME = 'categorie-list';
  subscription = [] as Subscription[];
  tabIndex: number;
  commandeList = [] as CategorieModel[];
  commandeListFilterd = [] as CategorieModel[];
  commandeListArchived = [] as CategorieModel[];
  constructor() { }

  ngOnInit(): void {
  }

  search() {

  }

  resetSearch() {

  }

  loadCommande() {

  }

  loadCommandeArchived() {

  }

  delete() {

  }
}
