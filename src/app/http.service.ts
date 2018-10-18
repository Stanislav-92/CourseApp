import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Links } from './links';
// import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getColumn1(): Observable<any> {
    return this.http.get<any>(Links.columnChart1);
  }

  getColumn2(): Observable<any> {
    return this.http.get<any>(Links.columnChart2);
  }

  getLine1(): Observable<any> {
    return this.http.get<any>(Links.lineChart1);
  }

  getLine2(): Observable<any> {
    return this.http.get<any>(Links.lineChart2);
  }

  constructor(private http: HttpClient) { }

}
