import { TestBed } from '@angular/core/testing';
import { ParserService } from './parser.service';
import { dataCol1 } from './constants';
import { dataCol2 } from './constants';
import { dataLine1 } from './constants';
import { dataLine2 } from './constants';

describe('ParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParserService = TestBed.get(ParserService);
    expect(service).toBeTruthy();
  });

  it('| Displayed Columns and Prepared Columns should have the length = 6', () => {
    const service: ParserService = TestBed.get(ParserService);
      expect(service.parseData(dataCol1).displayedColumns.length).toEqual(6);
      expect(service.parseData(dataCol1).preparedColumns.length).toEqual(6);
      expect(service.parseData(dataLine2).displayedColumns.length).toEqual(6);
      expect(service.parseData(dataLine2).preparedColumns.length).toEqual(6);
  });

  it('| Displayed Columns and Prepared Columns should have the length = 2', () => {
    const service: ParserService = TestBed.get(ParserService);
      expect(service.parseData(dataCol2).displayedColumns.length).toEqual(2);
      expect(service.parseData(dataCol2).preparedColumns.length).toEqual(2);
  });

  it('| Displayed Columns and Prepared Columns should have the length = 3', () => {
    const service: ParserService = TestBed.get(ParserService);
      expect(service.parseData(dataLine1).displayedColumns.length).toEqual(3);
      expect(service.parseData(dataLine1).preparedColumns.length).toEqual(3);
  });

});
