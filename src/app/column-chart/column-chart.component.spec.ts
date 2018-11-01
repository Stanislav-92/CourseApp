import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'angular2-highcharts';
import { ColumnChartComponent } from './column-chart.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ColumnChartComponent', () => {
  let component: ColumnChartComponent;
  let fixture: ComponentFixture<ColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnChartComponent ],
      imports: [
        ChartModule, RouterTestingModule
      ]
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
