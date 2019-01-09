import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/interfaces/formDataInterface';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userData: IFormData;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.userData = this.sharedDataService.formData;
  }

}
