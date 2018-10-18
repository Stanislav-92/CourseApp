import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppRoutingModule } from './app-routing.module';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    ColumnChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
