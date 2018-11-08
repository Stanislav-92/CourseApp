import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCitiesColumnChartComponent } from './table-cities-column-chart.component';

describe('TableCitiesColumnChartComponent', () => {
  let component: TableCitiesColumnChartComponent;
  let fixture: ComponentFixture<TableCitiesColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCitiesColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCitiesColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
