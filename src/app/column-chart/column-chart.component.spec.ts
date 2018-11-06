import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'angular2-highcharts';
import { ColumnChartComponent } from './column-chart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HighchartsService, HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

describe('ColumnChartComponent', () => {
  let component: ColumnChartComponent;
  let fixture: ComponentFixture<ColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnChartComponent ],
      imports: [
        ChartModule, RouterTestingModule
      ],
      providers: [HighchartsService, HighchartsStatic]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
