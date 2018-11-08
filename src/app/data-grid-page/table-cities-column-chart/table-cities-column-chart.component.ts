import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-cities-column-chart',
  templateUrl: './table-cities-column-chart.component.html',
  styleUrls: ['./table-cities-column-chart.component.css']
})
export class TableCitiesColumnChartComponent implements OnInit {
  @Input() tableData: any;
  tableArray: Object[] = [
      {category: 'Shanghai', population: 24.2},
      {category: 'Beijing', population: 20.8},
      {category: 'Karachi', population: 14.9},
      {category: 'Shenzhen', population: 13.7},
      {category: 'Guangzhou', population: 13.1},
      {category: 'Istanbul', population: 12.7},
      {category: 'Mumbai', population: 12.4},
      {category: 'Moscow', population: 12.2},
      {category: 'São Paulo', population: 12},
      {category: 'Delhi', population: 11.7},
      {category: 'Kinshasa', population: 11.5},
      {category: 'Tianjin', population: 11.2},
      {category: 'Lahore', population: 11.1},
      {category: 'Jakarta', population: 10.6},
      {category: 'Dongguan', population: 10.6},
      {category: 'Lagos', population: 10.6},
      {category: 'Bengaluru', population: 10.3},
      {category: 'Seoul', population: 9.8},
      {category: 'Seoul', population: 9.3},
      {category: 'Tokyo', population: 9.3},
  ];

  displayedColumns: string[] = ['category', 'population'];
  dataSource = new MatTableDataSource(this.tableArray);

  constructor() { }

  ngOnInit() {
  }

}
