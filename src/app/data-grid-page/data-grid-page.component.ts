import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChartPageService } from '../chart-page.service';

@Component({
  selector: 'app-data-grid-page',
  templateUrl: './data-grid-page.component.html',
  styleUrls: ['./data-grid-page.component.css']
})



export class DataGridPageComponent implements OnInit {
  tableData: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private chartPageService: ChartPageService
    ) { }

  ngOnInit() {
    const keyId = this.route.snapshot.paramMap.get('id');
    switch (keyId) {
      case 'col1':
        console.log('first column chart');
        this.getData('getColumn1');
        break;
      case 'col2':
        console.log('second column chart');
        this.getData('getColumn2');
        break;
      case 'line1':
        console.log('first line chart');
        this.getData('getLine1');
        break;
      case 'line2':
        console.log('second line chart');
        this.getData('getLine2');
        break;
      default:
        alert('Unavailable');
    }
  }

  goBack() {
    this.location.back();
  }

  getData(prop) {
    this.chartPageService[prop]().subscribe(receivedData => {
      this.tableData = receivedData;
      console.log(this.tableData); });
  }

}
