import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-temperature-line-chart',
  templateUrl: './table-temperature-line-chart.component.html',
  styleUrls: ['./table-temperature-line-chart.component.css']
})
export class TableTemperatureLineChartComponent implements OnInit {
  @Input() tableData: any;
  tableArray: Object[] = [
    {category: 'Jan', tokyo: 7, london: 3.9},
    {category: 'Feb', tokyo: 6.9, london: 4.2},
    {category: 'Mar', tokyo: 9.5, london: 5.7},
    {category: 'Apr', tokyo: 14.5, london: 8.5},
    {category: 'May', tokyo: 18.4, london: 11.9},
    {category: 'Jun', tokyo: 21.5, london: 15.2},
    {category: 'Jul', tokyo: 25.2, london: 17},
    {category: 'Aug', tokyo: 26.5, london: 16.6},
    {category: 'Sep', tokyo: 23.3, london: 14.2},
    {category: 'Oct', tokyo: 18.3, london: 10.3},
    {category: 'Nov', tokyo: 13.9, london: 6.6},
    {category: 'Dec', tokyo: 9.6, london: 4.8},
  ];

  displayedColumns: string[] = ['category', 'tokyo', 'london'];
  dataSource = new MatTableDataSource(this.tableArray);

  constructor() { }

  ngOnInit() {
  }

}
