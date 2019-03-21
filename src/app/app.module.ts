import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-highcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { DataGridPageComponent } from './data-grid-page/data-grid-page.component';
import { MaterialModule } from './material.module';
import { DataGridComponent } from './data-grid-page/data-grid/data-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RainfallMetricsPipe } from './pipes/rainfall-metrics.pipe';
import { FormPageComponent } from './form-page/form-page.component';
import { TableComponent } from './data-grid-page/table/table.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    ColumnChartComponent,
    LineChartComponent,
    DataGridPageComponent,
    DataGridComponent,
    RainfallMetricsPipe,
    FormPageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [
    {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
