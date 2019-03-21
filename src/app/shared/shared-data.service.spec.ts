import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shared-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('SharedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: SharedDataService = TestBed.get(SharedDataService);
    expect(service).toBeTruthy();
  });
});
