import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  model: any = {}
  result: Subject<boolean>

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.result = new Subject()
  }

  close(option: boolean) {
    this.result.next(option)
    this.modalRef.hide()
  }

}
