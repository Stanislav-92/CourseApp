import { Injectable } from '@angular/core';
import { col1 } from './constants';
import { col2 } from './constants';
import { line1 } from './constants';
import { line2 } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  // Creating 4 arrays for material table to hold parsed data
  colRain = [];
  colCities = [];
  lineTemp = [];
  lineSolar = [];

  // Parsing received data into arrays depending of the chart type
  parseData(data) {
    console.log(data);

    switch (data.chartID.value) {
      case col1:
        console.log(this.colRain);
        break;
      case col2:
        this.colCities.push(data.title);
        console.log(this.colCities);
        break;
      case line1:
        this.lineTemp.push(data.title);
        console.log(this.lineTemp);
        break;
      case line2:
        this.lineSolar.push(data.title);
        console.log(this.lineSolar);
        break;
      default:
        console.log('zzzz');
    }

  }



  constructor() { }
}
