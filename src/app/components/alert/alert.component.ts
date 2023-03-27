import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [
  ]
})
export class AlertComponent implements OnInit {

  msg: string
  title: string
  button: string
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
