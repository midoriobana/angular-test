import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  type: any
  city: any
  district: any

  types = []  
  cities = []
  districts = []
  constructor() { }

  ngOnInit() {
  }

  clearInputs() {
    this.type = ''
    this.city = ''
    this.district = ''
  }

}
