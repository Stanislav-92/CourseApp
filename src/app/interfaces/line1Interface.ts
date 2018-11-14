import { ILineChart2 } from '../interfaces/line2Interface';

export interface ILineChart1 extends ILineChart2 {
  chart: Chart;
  xAxis1Line: XAxis;
  plotOptions1Line: PlotOptions1;
  series1Line: SeriesItem1[];
  data: Data;
}

export interface Chart {
  type: string;
}

export interface XAxis {
  categories: any[];
}

export interface PlotOptions1 {
  line: Line;
  series: Series;
}

export interface Line {
  dataLabels: DataLabels;
  enableMouseTracking: boolean;
}

export interface DataLabels {
  enabled: boolean;
}

export interface Series {
  animation: boolean;
  pointStart: number;
}

export interface SeriesItem1 {
  name: string;
  data: number[];
}

export interface Data {
  csv: string;
  googleSpreadsheetKey: boolean;
  googleSpreadsheetWorksheet: boolean;
}
