import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataGridComponent } from './data-grid.component';
import { RainfallMetricsPipe } from '../../pipes/rainfall-metrics.pipe';
import { MatTableModule, MatTableDataSource } from '@angular/material';
import { dataCol1 } from 'src/app/constants';

describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridComponent, RainfallMetricsPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ MatTableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    component.data = {
      tableData: new MatTableDataSource(),
      data: dataCol1,
      displayedColumns: [],
      preparedColumns: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
