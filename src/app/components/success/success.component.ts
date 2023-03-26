import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {

  model: any = {}
  result: Subject<boolean>

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.result = new Subject()
  }

  close(opcao: boolean) {
    this.result.next(opcao)
    this.modalRef.hide()
  }

}
