import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAverageRainColumnChartComponent } from './table-average-rain-column-chart.component';

describe('TableAverageRainColumnChartComponent', () => {
  let component: TableAverageRainColumnChartComponent;
  let fixture: ComponentFixture<TableAverageRainColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAverageRainColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAverageRainColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
