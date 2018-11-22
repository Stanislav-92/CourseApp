import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChartPageService } from '../chart-page.service';
import { ParserService } from '../parser.service';
import { col1 } from '../constants';
import { col2 } from '../constants';
import { line1 } from '../constants';
import { line2 } from '../constants';

@Component({
  selector: 'app-data-grid-page',
  templateUrl: './data-grid-page.component.html',
  styleUrls: ['./data-grid-page.component.css']
})

export class DataGridPageComponent implements OnInit {
  parsedData;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private chartPageService: ChartPageService,
    private parseService: ParserService
    ) { }

  ngOnInit() {
    const keyId = this.route.snapshot.paramMap.get('id');
    switch (keyId) {
      case col1:
        this.getData('getColumn1');
        break;
      case col2:
        this.getData('getColumn2');
        break;
      case line1:
        this.getData('getLine1');
        break;
      case line2:
        this.getData('getLine2');
        break;
      default:
        alert('Unavailable');
    }
  }

  getData(prop) {
    this.chartPageService[prop]().subscribe(receivedData => {
      this.parsedData = this.parseService.parseData(receivedData);
    });
  }

  goBack() {
    this.location.back();
  }

}
