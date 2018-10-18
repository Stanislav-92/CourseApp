import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})

export class ColumnChartComponent implements OnInit {
  options1: Object;
  options2: Object;

  constructor() {
    this.options1 = {

    };
    this.options2 = {

    };
  }

  ngOnInit() {
  }

}
