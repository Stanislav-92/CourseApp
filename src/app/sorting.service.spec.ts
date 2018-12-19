import { TestBed } from '@angular/core/testing';

import { SortingService } from './sorting.service';

describe('SortingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortingService = TestBed.get(SortingService);
    expect(service).toBeTruthy();
  });

  it('Should return object', () => {
    const service: SortingService = TestBed.get(SortingService);
    const value = {active: 'testCategory', direction: 'testSorting'};
    sessionStorage.setItem('key', JSON.stringify(value));
    expect(typeof service.getConfig()).toBe('object');
  });
});
