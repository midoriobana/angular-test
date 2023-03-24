import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RealStateService {

	constructor(
		private http: HttpClient
	) { }

	getRealState(): Promise<any> {
		return firstValueFrom(this.http.get(`${environment.API_URL}`))
	}

	createRealState(inBody: any): Promise<any> {
		return firstValueFrom(this.http.post(`${environment.API_URL}`, inBody))
	}

	editRealState(inBody: any): Promise<any> {
		return firstValueFrom(this.http.put(`${environment.API_URL}`, inBody))
	}

	deleteRealState(id: any): Promise<any> {
		return firstValueFrom(this.http.delete(`${environment.API_URL}/${id}`))
	}
	
	getRealStateById(id: any): Promise<any> {
		return firstValueFrom(this.http.get(`${environment.API_URL}/${id}`))
	}

}
