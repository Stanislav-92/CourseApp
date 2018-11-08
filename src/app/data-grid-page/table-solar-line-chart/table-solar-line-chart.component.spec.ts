import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSolarLineChartComponent } from './table-solar-line-chart.component';

describe('TableSolarLineChartComponent', () => {
  let component: TableSolarLineChartComponent;
  let fixture: ComponentFixture<TableSolarLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSolarLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSolarLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
