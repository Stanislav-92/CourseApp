import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})

export class ColumnChartComponent implements OnInit {
  @Input() chartData1;
  @Input() chartData2;

  constructor() {
  }

  ngOnInit() {
  }

}
