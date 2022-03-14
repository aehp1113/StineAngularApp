import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestInventory } from './request-inventory/Interfaces/request-inventory';

// export interface RequestInventory {
//   NameInventory: string;
//   KernelsInventory: number;
//   IdRequest: number;
//   RequestedKernelsRequest: number;
//   InventoryFlag: boolean;
// }
@Injectable({
  providedIn: 'root'
})
export class RequestInventoryService {
  private api: string = environment.apiUrl;
  private getRequestInventoryURL: string = this.api+'RequestInventory/getrequestinventory';

  getRequestInventory(): Observable<RequestInventory[]> {
    return this.http.get<RequestInventory[]>(this.getRequestInventoryURL);
  }
  constructor(private http: HttpClient) { }
}
