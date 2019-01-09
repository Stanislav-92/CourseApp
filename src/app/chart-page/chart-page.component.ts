import { Component, OnInit } from '@angular/core';
import { ChartPageService } from '../chart-page.service';
import { IColumnChart1 } from '../interfaces/col1Interface';
import { IColumnChart2 } from '../interfaces/col2Interface';
import { ILineChart1 } from '../interfaces/line1Interface';
import { ILineChart2 } from '../interfaces/line2Interface';
import { SharedDataService } from '../shared/shared-data.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
  columnData1$: Observable<IColumnChart1>;
  columnData2$: Observable<IColumnChart2>;
  lineData1$: Observable<ILineChart1>;
  lineData2$: Observable<ILineChart2>;
  wasHovered = false;
  pointInfo;

  constructor(private chartPageService: ChartPageService, private sharedDataService: SharedDataService) { }

  ngOnInit() {

    this.columnData1$ = this.chartPageService.getColumn1().pipe(
      map(val => {
        for (let i = 0; i < val.series.length; i++) {
          val.series[i].data = val.series[i].data.map(numbers => numbers + 10).filter(data => data < 80);
        }
        return val;
        }
      )
    );
    this.sharedDataService.saveColumn1(this.columnData1$);

    this.columnData2$ = this.chartPageService.getColumn2().pipe(
      map(val => {
        for (let i = 0; i < val.series[0].data.length; i++) {
          val.series[0].data[i] = val.series[0].data[i].map(values => {
            if (!isNaN(values)) {
              return values + 5;
            } else {
              return values;
            }
          }).filter(data => !isNaN(data) ? (data >= 16) : data);
        }
        return val;
        }
      )
    );
    this.sharedDataService.saveColumn2(this.columnData2$);

    this.lineData1$ = this.chartPageService.getLine1().pipe(
      map(val => {
        for (let i = 0; i < val.series.length; i++) {
          val.series[i].data = val.series[i].data.map(numbers => numbers + 3).filter(data => data <= 18);
        }
        return val;
        }
      )
    );
    this.sharedDataService.saveLine1(this.lineData1$);

    this.lineData2$ = this.chartPageService.getLine2().pipe(
      map(val => {
        for (let i = 0; i < val.series.length; i++) {
          val.series[i].data = val.series[i].data.map(numbers => numbers - 10000).filter(data => data >= 8000);
        }
        return val;
        }
      )
    );
    this.sharedDataService.saveLine2(this.lineData2$);

  }

  onSeriesHoverOver(tooltip) {
    this.wasHovered = true;
    this.pointInfo = tooltip;
  }

  closeTooltip() {
    this.wasHovered = false;
  }

}
