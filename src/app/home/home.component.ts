import { RealEstateService } from './../shared/providers/real-estate.service';
import { Component, OnInit } from '@angular/core';

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
  }

  async getRealEstate() {
    this.realEstateList = await this.realEstateService.getRealEstate()
  }

}
