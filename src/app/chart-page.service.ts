import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rainColumn } from './constants';
import { citiesColumn } from './constants';
import { tempLine } from './constants';
import { solarLine } from './constants';
import { Observable, of } from 'rxjs';
import { IColumnChart1 } from './interfaces/col1Interface';
import { IColumnChart2 } from './interfaces/col2Interface';
import { ILineChart1 } from './interfaces/line1Interface';
import { ILineChart2 } from './interfaces/line2Interface';

@Injectable({
  providedIn: 'root'
})

export class ChartPageService {

  getColumn1(): Observable<IColumnChart1> {
    return this.http.get<IColumnChart1>(rainColumn);
  }

  getColumn2(): Observable<IColumnChart2> {
    return this.http.get<IColumnChart2>(citiesColumn);
  }

  getLine1(): Observable<ILineChart1> {
    return this.http.get<ILineChart1>(tempLine);
  }

  getLine2(): Observable<ILineChart2> {
    return this.http.get<ILineChart2>(solarLine);
  }

  constructor(private http: HttpClient) {}

}
