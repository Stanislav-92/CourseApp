import { Injectable } from '@angular/core';
import { col2 } from './constants';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class ParserService {

  parseData(data) {
    // Declaring constants to hold data needed fot tables
    const dataSource = [];
    const displayedColumns = [];
    const preparedColumns = [];

    if (data.chartID.value === col2) {  // Parsing data received from second column chart

      // Looping through array of values needed for dataSource array of objects creation
      for (let i = 0; i < data.series[0].data.length; i++) {
        const row = {
          city: data.series[0].data[i][0], population: data.series[0].data[i][1]
        };
        dataSource.push(row);
      }

      // Looping through newly created dataSource array and creating displayedColumns array
      for (const key in dataSource[0]) {
        if (dataSource[0].hasOwnProperty(key)) {
          displayedColumns.push(key);
        }
      }

      // Looping through newly created displayedColumns array and creating preparedColumns array of objects
      for (const entry of displayedColumns) {
        preparedColumns.push({id: entry});
      }

      // Returning created data for usage in child DataGridComponent
      return {
        tableData: new MatTableDataSource(dataSource),
        displayedColumns,
        preparedColumns,
        data
      };

    } else {  // Parsing data received from first column and both line charts

      // Looping through array of values needed for dataSource array of objects creation
      for (let i = 0; i < data.category.length; i++) {
        const row = {
          category: data.category[i]
        };
        for (let j = 0; j < data.series.length; j++) {
          row[data.series[j].name] = data.series[j].data[i];
        }
        dataSource.push(row);
      }

      // Looping through newly created dataSource array and creating displayedColumns array
      for (const key in dataSource[0]) {
        if (dataSource[0].hasOwnProperty(key)) {
          displayedColumns.push(key);
        }
      }

      // Looping through newly created displayedColumns array and creating preparedColumns array of objects
      for (const entry of displayedColumns) {
        preparedColumns.push({id: entry});
      }

      // Returning created data for usage in child DataGridComponent
      return {
        tableData: new MatTableDataSource(dataSource),
        displayedColumns,
        preparedColumns,
        data
      };

    }
  }

  constructor() { }
}
