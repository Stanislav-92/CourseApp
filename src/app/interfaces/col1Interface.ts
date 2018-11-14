import { IColumnChart2 } from '../interfaces/col2Interface';

export interface IColumnChart1 extends IColumnChart2 {
  xAxis1Col: XAxis1;
  tooltip: Tooltip;
  plotOptions1Col: PlotOptions1;
  months: string[];
  series1Col: SeriesItem1[];
}

export interface XAxis1 {
  categories: any[];
  crosshair: boolean;
}

export interface Tooltip {
  headerFormat: string;
  pointFormat: string;
  footerFormat: string;
  shared: boolean;
  useHTML: boolean;
}

export interface PlotOptions1 {
  column: Column;
  series: Series;
}

export interface Column {
  pointPadding: number;
  borderwidth: number;
}

export interface Series {
  animation: boolean;
  pointstart: number;
}

export interface SeriesItem1 {
  name: string;
  data: number[];
  visible?: boolean;
}
