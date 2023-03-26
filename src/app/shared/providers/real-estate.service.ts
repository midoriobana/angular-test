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
		private http: HttpClient
	) { }

	getRealEstate(): Promise<any> {
		return firstValueFrom(this.http.get(`${environment.API_URL}/${this.endpoint}`))
	}

	createRealEstate(inBody: any): Promise<any> {
		return firstValueFrom(this.http.post(`${environment.API_URL}/${this.endpoint}`, inBody))
	}

	editRealEstate(id: string, inBody: any): Promise<any> {
		return firstValueFrom(this.http.put(`${environment.API_URL}/${this.endpoint}/${id}`, inBody))
	}

	deleteRealEstate(id: any): Promise<any> {
		return firstValueFrom(this.http.delete(`${environment.API_URL}/${this.endpoint}/${id}`))
	}
	
	getRealEstateById(id: any): Promise<any> {
		return firstValueFrom(this.http.get(`${environment.API_URL}/${this.endpoint}/${id}`))
	}

}
