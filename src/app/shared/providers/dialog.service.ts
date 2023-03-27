import { ConfirmationComponent } from './../../components/confirmation/confirmation.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SuccessComponent } from 'src/app/components/success/success.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  bsModalRef: BsModalRef
  defaultOptions: ModalOptions

  constructor(
    public modalService: BsModalService
  ) { }


  confirmation(model: any) {
    this.defaultOptions = {
      backdrop: 'static',
      keyboard: false,
      class: 'modal-dialog-centered modal-sm'
    }
    this.bsModalRef = this.modalService.show(ConfirmationComponent, this.defaultOptions)
    this.bsModalRef.content.model = model
    return (this.bsModalRef.content as ConfirmationComponent).result
  }

  success(model: any) {
    this.defaultOptions = {
      backdrop: 'static',
      keyboard: false,
      class: 'modal-dialog-centered modal-sm'
    }
    this.bsModalRef = this.modalService.show(SuccessComponent, this.defaultOptions)
    this.bsModalRef.content.model = model
    return (this.bsModalRef.content as SuccessComponent).result
  }

  alert(model: any) {
    this.defaultOptions = {
      backdrop: 'static',
      keyboard: false,
      class: 'modal-dialog-centered modal-sm'
    }
    this.bsModalRef = this.modalService.show(SuccessComponent, this.defaultOptions)
    this.bsModalRef.content.model = model
    return (this.bsModalRef.content as SuccessComponent).result
  }

}
