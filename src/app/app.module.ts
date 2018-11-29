import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-highcharts';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { DataGridPageComponent } from './data-grid-page/data-grid-page.component';
import { MaterialModule } from './material.module';
import { DataGridComponent } from './data-grid-page/data-grid/data-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    ColumnChartComponent,
    LineChartComponent,
    DataGridPageComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
