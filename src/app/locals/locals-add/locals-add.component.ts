import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-locals-add',
  templateUrl: './locals-add.component.html',
  styleUrls: ['./locals-add.component.css'],
  preserveWhitespaces: true
})
export class LocalsAddComponent implements OnInit {

  form = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
