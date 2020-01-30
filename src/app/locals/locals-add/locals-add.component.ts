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

  admin: any[];
  filteredAdminSingle: any[];

  constructor(private service: AdmService) { }

  /* filterAdminSingle(event) {
    let query = event.query;
    this.service.list().then(admin => {
      this.filteredAdminSingle = this.filterAdmin(query, admin);
    });
  } */

  /* filterAdmin(query, admin: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < admin.length; i++) {
      let adm = admin[i];
      if (adm.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(adm);
      }
    }
    return filtered;
  } */

  ngOnInit() {
    //this.service.list().subscribe(dados => this.adm = dados);
  }

}
