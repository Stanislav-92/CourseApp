import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridPageComponent } from './data-grid-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataGridPageComponent', () => {
  let component: DataGridPageComponent;
  let fixture: ComponentFixture<DataGridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridPageComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
