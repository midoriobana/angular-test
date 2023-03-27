import { RealEstateService } from './../../shared/providers/real-estate.service';
import { Component, OnInit } from '@angular/core';
import { StorageService as storage } from 'src/app/shared/providers/storage.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  
  realEstate: any
  id = storage.get('id')

  constructor(
    private realEstateService: RealEstateService
  ) { }

  async ngOnInit() {
    this.realEstate = await this.realEstateService.getRealEstateById(this.id)
  }

}
