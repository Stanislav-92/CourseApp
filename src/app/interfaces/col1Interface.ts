export interface IColumnChart1 {
  title: Title;
  subtitle: Subtitle;
  chart: Chart;
  chartID: ChartID;
  xAxis: XAxis;
  yAxis: YAxis;
  tooltip: Tooltip;
  plotOptios: PlotOptions;
  series: SeriesItem[];
  data: Data;
}

export interface Title {
  text: string;
}

export interface Subtitle {
  text: string;
}

export interface Chart {
  type: string;
}

export interface ChartID {
  value: string;
}

export interface XAxis {
  categories: any[];
  crosshair: boolean;
}

export interface YAxis {
  min: number;
  title: Title;
}

export interface Tooltip {
  headerFormat: string;
  pointFormat: string;
  footerFormat: string;
  shared: boolean;
  useHTML: boolean;
}

export interface PlotOptions {
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

export interface SeriesItem {
  name: string;
  data: number[];
  visible?: boolean;
}

export interface Data {
  csv: string;
  googleSpreadsheetKey: boolean;
  googleSpreadsheetWorksheet: boolean;
}
