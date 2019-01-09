export interface IColumnChart2 {
  title: Title;
  subtitle: Subtitle;
  chart: Chart;
  chartID: ChartID;
  xAxisCol: XAxis;
  yAxisCol: YAxis;
  legendCol: Legend;
  tooltip: Tooltip;
  series: SeriesItem[];
  plotOptionsCol: PlotOptions;
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
  type: string;
  labels: Labels;
}

export interface Labels {
  rotation: number;
  style: Style;
}

export interface Style {
  fontSize: string;
  fontFamily: string;
}

export interface YAxis {
  min: number;
  title: Title;
}

export interface Legend {
  enabled: boolean;
}

export interface Tooltip {
  pointFormat: string;
}

export interface SeriesItem {
  name: string;
  data: any[];
  dataLabels: DataLabels;
}

export interface DataLabels {
  enabled: boolean;
  rotation: number;
  color: string;
  align: string;
  format: string;
  y: number;
  style: Style;
}

export interface PlotOptions {
  series: Series;
}

export interface Series {
  animation: boolean;
}

export interface Data {
  csv: string;
  googleSpreadsheetKey: boolean;
  googleSpreadsheetWorksheet: boolean;
}
