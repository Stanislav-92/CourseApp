import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ParserService } from '../parser.service';
import { col1 } from '../constants';
import { col2 } from '../constants';
import { line1 } from '../constants';
import { line2 } from '../constants';
import { SharedDataService } from '../shared/shared-data.service';

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
    private parserService: ParserService,
    private sharedDataService: SharedDataService
    ) { }

  ngOnInit() {
    const keyId = this.route.snapshot.paramMap.get('id');
    switch (keyId) {
      case col1:
        this.getData('receivedData1');
        break;
      case col2:
        this.getData('receivedData2');
        break;
      case line1:
        this.getData('receivedData3');
        break;
      case line2:
        this.getData('receivedData4');
        break;
      default:
        alert('Unavailable');
    }

  }

  getData(prop: string) {
     this.sharedDataService[prop].subscribe(receivedData => this.parsedData = this.parserService.parseData(receivedData));
  }

  goBack() {
    this.location.back();
  }

}
