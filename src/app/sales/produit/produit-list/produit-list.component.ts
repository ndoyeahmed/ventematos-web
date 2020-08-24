import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {CategorieModel} from '../../../shared/models/sales/categorie.model';
import {ProduitModel} from '../../../shared/models/sales/produit.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  searchItem = '';
  SPINNER_NAME = 'produit-list';
  subscription = [] as Subscription[];
  tabIndex: number;
  produitList = [] as ProduitModel[];
  produitListFilterd = [] as ProduitModel[];
  produitListArchived = [] as ProduitModel[];
  constructor() { }

  ngOnInit(): void {
  }

  delete() {

  }

  search() {

  }

  resetSearch() {

  }

  loadProduit() {

  }

  loadProduitArchived() {

  }

  onDelete(s: any) {

  }

  restore(s: any) {

  }
}
