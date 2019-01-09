export interface ILineChart2 {
  title: Title;
  subtitle: Subtitle;
  chartID: ChartID;
  yAxisLine: YAxis;
  legendLine: Legend;
  plotOptionsLine: PlotOptions;
  series: SeriesItem[];
  responsive: Responsive;
}

export interface Title {
  text: string;
}

export interface Subtitle {
  text: string;
}

export interface ChartID {
  value: string;
}

export interface YAxis {
  title: Title;
}

export interface Legend {
  layout: string;
  align: string;
  verticalAlign: string;
}

export interface PlotOptions {
  series: Series;
}

export interface Series {
  label: Label;
  pointStart: number;
  animation: boolean;
}

export interface Label {
  connectorAllowed: boolean;
}

export interface SeriesItem {
  name: string;
  data: any[];
}

export interface Responsive {
  rules: RulesItem[];
}

export interface RulesItem {
  condition: Condition;
  chartOptions: ChartOptions;
  _id: string;
}

export interface Condition {
  maxWidth: number;
}

export interface ChartOptions {
  legend: Legend;
}
