import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-solar-line-chart',
  templateUrl: './table-solar-line-chart.component.html',
  styleUrls: ['./table-solar-line-chart.component.css']
})
export class TableSolarLineChartComponent implements OnInit {
  @Input() tableData: any;
  tableArray: Object[] = [
    {category: '2010', installation: 43934, manufacturing: 24916, sales: 11744, project: null, other: 12908},
    {category: '2011', installation: 52503, manufacturing: 24064, sales: 17722, project: null, other: 5948},
    {category: '2012', installation: 57177, manufacturing: 29742, sales: 16005, project: 7988, other: 8105},
    {category: '2013', installation: 69658, manufacturing: 29851, sales: 19771, project: 12169, other: 11248},
    {category: '2014', installation: 97031, manufacturing: 32490, sales: 20185, project: 15112, other: 8989},
    {category: '2015', installation: 119931, manufacturing: 30282, sales: 24377, project: 22452, other: 11816},
    {category: '2016', installation: 137133, manufacturing: 38121, sales: 32147, project: 34400, other: 18274},
    {category: '2017', installation: 154175, manufacturing: 40434, sales: 39387, project: 34227, other: 18111},
  ];

  displayedColumns: string[] = ['category', 'installation', 'manufacturing', 'sales', 'project', 'other'];
  dataSource = new MatTableDataSource(this.tableArray);

  constructor() { }

  ngOnInit() {
  }

}
