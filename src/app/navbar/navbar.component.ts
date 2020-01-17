import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem [];

  activeItem: MenuItem;

  items1: MenuItem[];

  items2: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items1 = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
    ];

    this.items2 = [
        {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
        {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
        {label: 'Documentation', icon: 'fa fa-fw fa-book'},
        {label: 'Support', icon: 'fa fa-fw fa-support'},
        {label: 'Social', icon: 'fa fa-fw fa-twitter'}
    ];

    this.activeItem = this.items2[0];

    this.activeItem = this.items[2];
  }
  closeItem(event, index) {
    this.items2 = this.items2.filter((item, i) => i !== index);
    event.preventDefault();
}

}
