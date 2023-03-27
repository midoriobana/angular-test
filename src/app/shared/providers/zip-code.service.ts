import { HandleErrorService } from './handle-error.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {

  endpoint = 'https://viacep.com.br/ws'
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleErrorService
  ) { }

  getZipCode(zipCode: any): Promise<any> {
    return firstValueFrom(this.http.get(`${this.endpoint}/${zipCode}/json/`)).then(res => {
      return res
    }).catch(err => this.handleErrorService.handleError(err))
  }

}
