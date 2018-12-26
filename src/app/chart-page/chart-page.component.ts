import { Component, OnInit } from '@angular/core';
import { ChartPageService } from '../chart-page.service';
import { IColumnChart1 } from '../interfaces/col1Interface';
import { IColumnChart2 } from '../interfaces/col2Interface';
import { ILineChart1 } from '../interfaces/line1Interface';
import { ILineChart2 } from '../interfaces/line2Interface';
import { FormDataService } from '../form-page/form-data.service';
import { IFormData } from '../interfaces/formDataInterface';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
  columnData1: IColumnChart1;
  columnData2: IColumnChart2;
  lineData1: ILineChart1;
  lineData2: ILineChart2;
  wasHovered = false;
  pointInfo;
  userData: IFormData;

  constructor(private chartPageService: ChartPageService, private formDataService: FormDataService) { }

  ngOnInit() {
    this.chartPageService.getColumn1().subscribe(receivedData => this.columnData1 = receivedData);
    this.chartPageService.getColumn2().subscribe(receivedData => this.columnData2 = receivedData);
    this.chartPageService.getLine1().subscribe(receivedData => this.lineData1 = receivedData);
    this.chartPageService.getLine2().subscribe(receivedData => this.lineData2 = receivedData);

    this.userData = this.formDataService.formData;
  }

  onSeriesHoverOver(tooltip) {
    this.wasHovered = true;
    this.pointInfo = tooltip;
  }

  closeTooltip() {
    this.wasHovered = false;
  }

}
