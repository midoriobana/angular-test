import { HandleErrorService } from './handle-error.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RealEstateService {

	endpoint = 'imovel'

	constructor(
		private http: HttpClient,
		private handleErrorService: HandleErrorService
	) { }

	getRealEstate(): Promise<any> {
		return firstValueFrom(this.http.get(`${environment.API_URL}/${this.endpoint}`)).then(res => {
      return res
    }).catch(err => this.handleErrorService.handleError(err))
	}

	createRealEstate(inBody: any): Promise<any> {
		return firstValueFrom(this.http.post(`${environment.API_URL}/${this.endpoint}`, inBody)).then(res => {
      return res
    }).catch(err => this.handleErrorService.handleError(err))
	}

	editRealEstate(id: string, inBody: any): Promise<any> {
		return firstValueFrom(this.http.put(`${environment.API_URL}/${this.endpoint}/${id}`, inBody)).then(res => {
      return res
    }).catch(err => this.handleErrorService.handleError(err))
	}

	deleteRealEstate(id: any): Promise<any> {
		return firstValueFrom(this.http.delete(`${environment.API_URL}/${this.endpoint}/${id}`)).then(res => {
      return res
    }).catch(err => this.handleErrorService.handleError(err))
	}
	
	getRealEstateById(id: any): Promise<any> {
		return firstValueFrom(this.http.get(`${environment.API_URL}/${this.endpoint}/${id}`)).then(res => {
      return res
    }).catch(err => this.handleErrorService.handleError(err))
	}

}
