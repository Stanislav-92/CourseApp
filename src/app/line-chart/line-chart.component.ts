import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
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
