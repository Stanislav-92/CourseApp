export interface ILineChart1 {
  title: Title;
  subtitle: Subtitle;
  chart: Chart;
  chartID: ChartID;
  xAxis: XAxis;
  yAxis: YAxis;
  plotOptions: PlotOptions;
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
}

export interface YAxis {
  title: Title;
}

export interface PlotOptions {
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

export interface SeriesItem {
  name: string;
  data: number[];
}

export interface Data {
  csv: string;
  googleSpreadsheetKey: boolean;
  googleSpreadsheetWorksheet: boolean;
}
