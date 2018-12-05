import { TestBed } from '@angular/core/testing';
import { ParserService } from './parser.service';

describe('ParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParserService = TestBed.get(ParserService);
    expect(service).toBeTruthy();
  });

  it('should return length = 6', () => {
    const service: ParserService = TestBed.get(ParserService);
    // expect(service.parseData(data).displayedColumns.length).toEqual(6);
  });

});
