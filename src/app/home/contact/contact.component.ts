import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/providers/dialog.service';
import { Component, OnInit } from '@angular/core';
import { NavRouteLinks } from 'src/app/shared/commons/NavRouteLinks';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  form: FormGroup

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      mensagem: ['', Validators.required],
    })
  }

  submit() {
    const model = {
      title: 'Sucesso',
      msg: `Mensagem enviada com sucesso!`,
    };
    if (this.form.valid) {
      this.dialogService.success(model).subscribe((res: any) => {
        if (res) {
          this.router.navigate([NavRouteLinks.PAGE.HOME])
        }
      })
    } else this.form.markAllAsTouched()
  }
  
  get f() {
    return this.form.controls
  }

}
