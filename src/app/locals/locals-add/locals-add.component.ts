import { Component, OnInit } from '@angular/core';
import { Administrations } from './adm-list';
import { AdmService } from '../adm.service';

@Component({
  selector: 'app-locals-add',
  templateUrl: './locals-add.component.html',
  styleUrls: ['./locals-add.component.css'],
  preserveWhitespaces: true
})
export class LocalsAddComponent implements OnInit {

  adm: Administrations[] = [];

  constructor(private service: AdmService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.adm = dados);
  }

}
