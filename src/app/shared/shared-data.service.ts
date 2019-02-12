import { Injectable } from '@angular/core';
import { IFormData } from '../interfaces/formDataInterface';
import { IColumnChart1 } from '../interfaces/col1Interface';
import { IColumnChart2 } from '../interfaces/col2Interface';
import { ILineChart1 } from '../interfaces/line1Interface';
import { ILineChart2 } from '../interfaces/line2Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  formData: IFormData;
  receivedData1: Observable<IColumnChart1>;
  receivedData2: Observable<IColumnChart2>;
  receivedData3: Observable<ILineChart1>;
  receivedData4: Observable<ILineChart2>;

  constructor(private http: HttpClient) {}

  saveFormData(data: IFormData) {
    this.formData = data;
    return this.http.post('/userInfo', this.formData);
  }

  saveColumn1(data: Observable<IColumnChart1>) {
    this.receivedData1 = data;
  }

  saveColumn2(data: Observable<IColumnChart2>) {
    this.receivedData2 = data;
  }

  saveLine1(data: Observable<ILineChart1>) {
    this.receivedData3 = data;
  }

  saveLine2(data: Observable<ILineChart2>) {
    this.receivedData4 = data;
  }

}
