import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemperatureLineChartComponent } from './table-temperature-line-chart.component';

describe('TableTemperatureLineChartComponent', () => {
  let component: TableTemperatureLineChartComponent;
  let fixture: ComponentFixture<TableTemperatureLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemperatureLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemperatureLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
