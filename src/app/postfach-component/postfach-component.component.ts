import { Component, OnInit } from '@angular/core';
import { postfachProducts } from '../data/postfach.data';

import { process, State } from '@progress/kendo-data-query';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';

import { Observable, of } from 'rxjs';
//import {  } from 'rxjs/operators';

@Component({
  selector: 'app-postfach-component',
  templateUrl: './postfach-component.component.html',
  styleUrls: ['./postfach-component.component.css']
})
export class PostfachComponentComponent implements OnInit {
  state: State = {
    skip: 0,
    take: 5
  }

  //public gridData: GridDataResult = process(postfachProducts, this.state);
  public gridData: Observable<any> = of(postfachProducts);
  constructor() { }

  ngOnInit() {
    console.log(this.gridData);
    this.gridData.subscribe();
  }

  /*
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(postfachProducts, this.state);
  }
  */

}
