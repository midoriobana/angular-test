import { DialogService } from 'src/app/shared/providers/dialog.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(
    private dialogService: DialogService
  ) { }

  handleError(err: any): Promise<any> {
    let msgError: string | null = null
    let title: string | null = null
    let detail: string | null = null

    if (err.status == 404) {
      msgError = 'Dados não encontrados'

    }

    const model = {
      title: 'Atenção',
      msg: `<span>${msgError}</span>
      <p>${detail ? detail : ''}</p>
      <p>${title ? title : ''}</p>`,

    };

    if (msgError || detail || title) {
      this.dialogService.alert(model)
    }

    return Promise.reject(err)
  }
}
