import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-paiement-add',
  templateUrl: './paiement-add.component.html',
  styleUrls: ['./paiement-add.component.css']
})
export class PaiementAddComponent implements OnInit {

  ADD_SPINNER = 'spinner_add';
  numeroFacture = '';

  constructor() { }

  ngOnInit(): void {
  }

  add() {
  }
}
