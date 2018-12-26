import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChartPageService } from '../chart-page.service';
import { ParserService } from '../parser.service';
import { col1 } from '../constants';
import { col2 } from '../constants';
import { line1 } from '../constants';
import { line2 } from '../constants';
import { FormDataService } from '../form-page/form-data.service';
import { IFormData } from '../interfaces/formDataInterface';

@Component({
  selector: 'app-data-grid-page',
  templateUrl: './data-grid-page.component.html',
  styleUrls: ['./data-grid-page.component.css']
})

export class DataGridPageComponent implements OnInit {
  parsedData;
  userData: IFormData;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private chartPageService: ChartPageService,
    private parserService: ParserService,
    private formDataService: FormDataService
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

    this.userData = this.formDataService.formData;
  }

  getData(prop) {
    this.chartPageService[prop]().subscribe(receivedData => this.parsedData = this.parserService.parseData(receivedData));
  }

  goBack() {
    this.location.back();
  }

}
