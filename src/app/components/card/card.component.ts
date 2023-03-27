import { DialogService } from './../../shared/providers/dialog.service';
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
    private dialogService: DialogService,
    private router: Router
  ) { }

  ngOnInit() {

  }


  async deleteRealEstate(id: string) {
    await this.realEstateService.deleteRealEstate(id)
  }


  confirm(id: string) {
    const model = {
      title: 'Excluir anúncio',
      msg: 'Tem certeza que deseja excluir esse anúncio?'
    }
    this.dialogService.confirmation(model).subscribe((res: any) => {
      if (res) this.deleteRealEstate(id)
    })
  }

  async editRealEstate(id: string) {
    storage.save('id', id)
    this.router.navigate([NavRouteLinks.PAGE.ADVERTISE])
  }

  viewDetail(id: string) {
    storage.save('id', id)
    this.router.navigate([NavRouteLinks.PAGE.DETAILS])
  }

}
