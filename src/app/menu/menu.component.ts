import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'TV', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'TV 1',
                      items: [ { label: 'TV 1.1' }, { label: 'TV 1.2' } ]
                  },
                  {
                      label: 'TV 2',
                      items: [ { label: 'TV 2.1' }, { label: 'TV 2.2' } ]
                  }
              ],
              [
                  {
                      label: 'TV 3',
                      items: [ { label: 'TV 3.1' }, { label: 'TV 3.2' } ]
                  },
                  {
                      label: 'TV 4',
                      items: [ { label: 'TV 4.1' }, { label: 'TV 4.2' } ]
                  }
              ]
          ]
        }
    ];
  }
}
