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
import { TableAverageRainColumnChartComponent
} from './data-grid-page/table-average-rain-column-chart/table-average-rain-column-chart.component';
import { TableTemperatureLineChartComponent } from './data-grid-page/table-temperature-line-chart/table-temperature-line-chart.component';
import { TableSolarLineChartComponent } from './data-grid-page/table-solar-line-chart/table-solar-line-chart.component';
import { TableCitiesColumnChartComponent } from './data-grid-page/table-cities-column-chart/table-cities-column-chart.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent,
    ColumnChartComponent,
    LineChartComponent,
    DataGridPageComponent,
    TableAverageRainColumnChartComponent,
    TableTemperatureLineChartComponent,
    TableSolarLineChartComponent,
    TableCitiesColumnChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
