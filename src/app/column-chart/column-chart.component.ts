import { Component, OnInit, Input } from '@angular/core';
import { IColumnChart1 } from '../interfaces/col1Interface';
import { IColumnChart2 } from '../interfaces/col2Interface';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})

export class ColumnChartComponent implements OnInit {
  @Input() chartData1: IColumnChart1;
  @Input() chartData2: IColumnChart2;

  constructor() {
  }

  ngOnInit() {
  }

  onChartLoad(event) {
    const legend = event.context.legend;
    legend.onclick = (lEvent) => this.onLegendTitleClick(event);
  }

  onLegendTitleClick(event) {
    console.log(event);
  }

}
