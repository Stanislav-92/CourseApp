import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { SortingService } from '../../sorting.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @Input() data;
  @ViewChild(MatSort) sort: MatSort;
  savedData;
  retrievedData;

  constructor(
    private sortingService: SortingService
  ) { }

  ngOnInit() {
    this.data.tableData.sort = this.sort;
  }

  onSortData(sortedData) {
    console.log(sortedData);
    this.savedData = this.sortingService.saveConfig(sortedData);
    this.retrievedData = this.sortingService.getConfig();
  }

}
