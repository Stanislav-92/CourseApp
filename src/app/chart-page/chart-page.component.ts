import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
  columnData1 = [];
  columnData2 = [];
  lineData1 = [];
  lineData2 = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getColumn1().subscribe(receivedData => this.columnData1 = receivedData);
    this.httpService.getColumn2().subscribe(receivedData => this.columnData2 = receivedData);
    this.httpService.getLine1().subscribe(receivedData => this.lineData1 = receivedData);
    this.httpService.getLine2().subscribe(receivedData => this.lineData2 = receivedData);
  }

}
