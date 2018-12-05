import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartPageComponent } from './chart-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('ChartPageComponent', () => {
  let component: ChartPageComponent;
  let fixture: ComponentFixture<ChartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
