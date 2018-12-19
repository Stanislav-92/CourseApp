import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { DataGridPageComponent } from './data-grid-page/data-grid-page.component';
import { FormPageComponent } from './form-page/form-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  { path: 'form', component: FormPageComponent },
  { path: 'chart-page', component: ChartPageComponent },
  { path: 'data-grid-page/:id', component: DataGridPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
