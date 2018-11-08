import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-average-rain-column-chart',
  templateUrl: './table-average-rain-column-chart.component.html',
  styleUrls: ['./table-average-rain-column-chart.component.css']
})
export class TableAverageRainColumnChartComponent implements OnInit {
  @Input() tableData: any;
  // tableArray: any[] = [
  //   {category: this.tableData.months[0], ivanofrankivsk: this.tableData.series[0].data[0], tokyo: this.tableData.series[1].data[0],
  //      newyork: this.tableData.series[2].data[0], london: this.tableData.series[3].data[0], berlin: this.tableData.series[4].data[0]},

  //   {category: this.tableData.months[1], ivanofrankivsk: this.tableData.series[0].data[1], tokyo: this.tableData.series[1].data[1],
  //     newyork: this.tableData.series[2].data[1], london: this.tableData.series[3].data[1], berlin: this.tableData.series[4].data[1]},

  //   {category: this.tableData.months[2], ivanofrankivsk: this.tableData.series[0].data[2], tokyo: this.tableData.series[1].data[2],
  //     newyork: this.tableData.series[2].data[2], london: this.tableData.series[3].data[2], berlin: this.tableData.series[4].data[2]},

  //   {category: this.tableData.months[3], ivanofrankivsk: this.tableData.series[0].data[3], tokyo: this.tableData.series[1].data[3],
  //     newyork: this.tableData.series[2].data[3], london: this.tableData.series[3].data[3], berlin: this.tableData.series[4].data[3]},

  //   {category: this.tableData.months[4], ivanofrankivsk: this.tableData.series[0].data[4], tokyo: this.tableData.series[1].data[4],
  //     newyork: this.tableData.series[2].data[4], london: this.tableData.series[3].data[4], berlin: this.tableData.series[4].data[4]},

  //   {category: this.tableData.months[5], ivanofrankivsk: this.tableData.series[0].data[5], tokyo: this.tableData.series[1].data[5],
  //     newyork: this.tableData.series[2].data[5], london: this.tableData.series[3].data[5], berlin: this.tableData.series[4].data[5]},

  //   {category: this.tableData.months[6], ivanofrankivsk: this.tableData.series[0].data[6], tokyo: this.tableData.series[1].data[6],
  //     newyork: this.tableData.series[2].data[6], london: this.tableData.series[3].data[6], berlin: this.tableData.series[4].data[6]},

  //   {category: this.tableData.months[7], ivanofrankivsk: this.tableData.series[0].data[7], tokyo: this.tableData.series[1].data[7],
  //     newyork: this.tableData.series[2].data[7], london: this.tableData.series[3].data[7], berlin: this.tableData.series[4].data[7]},

  //   {category: this.tableData.months[8], ivanofrankivsk: this.tableData.series[0].data[8], tokyo: this.tableData.series[1].data[8],
  //     newyork: this.tableData.series[2].data[8], london: this.tableData.series[3].data[8], berlin: this.tableData.series[4].data[8]},

  //   {category: this.tableData.months[9], ivanofrankivsk: this.tableData.series[0].data[9], tokyo: this.tableData.series[1].data[9],
  //     newyork: this.tableData.series[2].data[9], london: this.tableData.series[3].data[9], berlin: this.tableData.series[4].data[9]},

  //   {category: this.tableData.months[10], ivanofrankivsk: this.tableData.series[0].data[10], tokyo: this.tableData.series[1].data[10],
  //     newyork: this.tableData.series[2].data[10], london: this.tableData.series[3].data[10], berlin: this.tableData.series[4].data[10]},

  //   {category: this.tableData.months[11], ivanofrankivsk: this.tableData.series[0].data[11], tokyo: this.tableData.series[1].data[11],
  //     newyork: this.tableData.series[2].data[11], london: this.tableData.series[3].data[11], berlin: this.tableData.series[4].data[11]},
  // ];
  tableArray: Object[] = [
      {category: 'Jan', ivanofrankivsk: 37.7, tokyo: 49.9,
       newyork: 83.6, london: 48.9, berlin: 42.4},

       {category: 'Feb', ivanofrankivsk: 34.4, tokyo: 71.5,
       newyork: 78.8, london: 38.8, berlin: 33.2},

       {category: 'Mar', ivanofrankivsk: 38.9, tokyo: 106.4,
       newyork: 98.5, london: 39.3, berlin: 34.5},

       {category: 'Arp', ivanofrankivsk: 44.8, tokyo: 129.2,
       newyork: 93.4, london: 41.4, berlin: 39.7},

       {category: 'May', ivanofrankivsk: 51.8, tokyo: 144,
       newyork: 106, london: 47, berlin: 52.6},

       {category: 'Jun', ivanofrankivsk: 69.1, tokyo: 176,
       newyork: 84.5, london: 48.3, berlin: 75.5},

       {category: 'Jul', ivanofrankivsk: 77.1, tokyo: 135.6,
       newyork: 105, london: 59, berlin: 57.4},

       {category: 'Aug', ivanofrankivsk: 64.4, tokyo: 148.5,
       newyork: 104.3, london: 59.6, berlin: 60.4},

       {category: 'Sep', ivanofrankivsk: 46.7, tokyo: 216.4,
       newyork: 91.2, london: 52.4, berlin: 47.6},

       {category: 'Oct', ivanofrankivsk: 43.3, tokyo: 194.1,
       newyork: 83.5, london: 65.2, berlin: 39.1},

       {category: 'Nov', ivanofrankivsk: 45.4, tokyo: 95.6,
       newyork: 106.6, london: 59.3, berlin: 46.8},

       {category: 'Dec', ivanofrankivsk: 43.5, tokyo: 54.4,
       newyork: 92.3, london: 51.2, berlin: 51.1},
  ];

  displayedColumns: string[] = ['category', 'ivanofrankivsk', 'tokyo', 'newyork', 'london', 'berlin'];
  dataSource = new MatTableDataSource(this.tableArray);

  constructor() { }

  ngOnInit() {
    console.log(this.tableData.months[0]);
  }

}
