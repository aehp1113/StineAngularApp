import { Component, OnInit } from '@angular/core';
import { RequestInventoryService } from '../request-inventory.service';
import { RequestInventory } from './Interfaces/request-inventory';

// export interface RequestInventory {
//   NameInventory: string;
//   KernelsInventory: number;
//   IdRequest: number;
//   RequestedKernelsRequest: number;
//   InventoryFlag: boolean;
// }

let RequestsData: RequestInventory[] = [
  ];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-request-inventory',
  templateUrl: './request-inventory.component.html',
  styleUrls: ['./request-inventory.component.css']
})
export class RequestInventoryComponent   {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  displayedColumnsReq: string[] = ['idRequest', 'requestedKernelsRequest', 'nameInventory', 'kernelsInventory','inventoryFlag'];
  datasource2 = RequestsData

  getRequestInventory( ) {
    this._requestInventoryService.getRequestInventory().subscribe(data => {
      this.datasource2 =data
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getRequestInventory();
    this.datasource2 = RequestsData;
    
  }

  constructor(private _requestInventoryService : RequestInventoryService) { }


}
