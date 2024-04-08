import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  year: number;
  constructor() {}

  ngOnInit() {
    this.year = new Date().getFullYear()
  }
}
