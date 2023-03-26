import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavRouteLinks } from './../../shared/commons/NavRouteLinks';
import { RealEstateService } from './../../shared/providers/real-estate.service';
import { StorageService as storage } from './../../shared/providers/storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() realEstateList: any
  realEstate: any

  constructor(
    private realEstateService: RealEstateService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  
  async deleteRealEstate(id: string) {
    await this.realEstateService.deleteRealEstate(id)
  }

  async editRealEstate(id: string) {
    storage.save('id', id)
    this.router.navigate([NavRouteLinks.PAGE.ADVERTISE])
  }

}
