import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  activeItem: MenuItem;

  items1: MenuItem[];

  items2: MenuItem[];

  value: Date;

  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;

  constructor() { }

  ngOnInit() {
    this.items1 = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];

    this.items2 = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];


    // SelectItem API with label-value pairs
    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    //An array of cities
    this.cities2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.activeItem = this.items2[0];

    /* this.activeItem = this.items[0]; */
  }

  closeItem(event, index) {
    this.items2 = this.items2.filter((item, i) => i !== index);
    event.preventDefault();
  }

}
