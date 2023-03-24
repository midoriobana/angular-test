import { Component, OnInit } from '@angular/core';
import { NavRouteLinks } from 'src/app/shared/commons/NavRouteLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get NavRouteLinks() {
    return NavRouteLinks
  }

}
