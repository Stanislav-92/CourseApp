import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material';
import { SortingService } from '../../sorting.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @Input() data;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private sortingService: SortingService
  ) { }

  ngOnInit() {
    const sortConfigInSession = this.sortingService.getConfig();
    if (sortConfigInSession) {
     // Apply sorting from session storage
      this.sort.sort(<MatSortable>({id: sortConfigInSession.active, start: sortConfigInSession.direction}));
      this.data.tableData.sort = this.sort;
    } else {
      // Apply default sorting
      this.data.tableData.sort = this.sort;
    }
  }

  onSortData(sortedData) {
    this.sortingService.saveConfig(sortedData);
  }

}
