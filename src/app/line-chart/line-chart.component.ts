import { Component, OnInit, Input } from '@angular/core';
import { ILineChart1 } from '../interfaces/line1Interface';
import { ILineChart2 } from '../interfaces/line2Interface';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {
  @Input() chartData1: ILineChart1;
  @Input() chartData2: ILineChart2;
  @Input() wasHovered: boolean;
  @Input() pointInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
