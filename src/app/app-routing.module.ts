import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './chart-page/chart-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/chart-page', pathMatch: 'full'},
  { path: 'chart-page', component: ChartPageComponent },
  { path: 'column-chart', component: ColumnChartComponent },
  { path: 'line-chart', component: LineChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
