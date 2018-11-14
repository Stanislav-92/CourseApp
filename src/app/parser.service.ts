import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  parseData(data) {
    console.log(data);

    const displayedColumns = ['month', 'if', 'tokyo', 'ny', 'london', 'berlin'];
    const dataSource = data.months.map(item => ({month: item}));

    // const dataSource1 = data.series[0].data.map(item => ({if: item}));
    // const dataSource2 = data.series[1].data.map(item => ({tokyo: item}));
    // const dataSource3 = data.series[2].data.map(item => ({ny: item}));
    // const dataSource4 = data.series[3].data.map(item => ({london: item}));
    // const dataSource5 = data.series[4].data.map(item => ({berlin: item}));

    console.log(dataSource);

    const preparedColumns = [
      {
        id: 'month',
        name: 'Months'
      },
      {
        id: 'if',
        name: 'Ivano-Frankivsk'
      },
      {
        id: 'tokyo',
        name: 'Tokyo'
      },
      {
        id: 'ny',
        name: 'New York'
      },
      {
        id: 'london',
        name: 'London'
      },
      {
        id: 'berlin',
        name: 'Berlin'
      }
    ];
    console.log(preparedColumns);

    return {
      displayedColumns, preparedColumns, dataSource
    };

  }



  constructor() { }
}
