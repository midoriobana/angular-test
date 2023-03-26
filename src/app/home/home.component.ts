import { RealEstateService } from './../shared/providers/real-estate.service';
import { Component, OnInit } from '@angular/core';
import { StorageService as storage } from './../shared/providers/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  realEstateList: any = []
 
  constructor(
    private realEstateService: RealEstateService
  ) { }

  ngOnInit() {
    this.getRealEstate()
    storage.clearAll()
  }

  async getRealEstate() {
    this.realEstateList = await this.realEstateService.getRealEstate()
  }

}
