import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedDataService } from '../shared/shared-data.service';
import { IResponse } from '../interfaces/responseInterface';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  genders = ['Male', 'Female', 'Other'];
  colors = ['Black', 'Red', 'Green', 'Violet', 'Blue', 'Yellow', 'Other'];
  allowSubmit = true;
  userForm: FormGroup;
  response: IResponse;
  duplicate: boolean;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null),
      'color': new FormControl(null)
      }
    );
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.sharedDataService.saveFormData(this.userForm.value)
        .subscribe(res => {
            this.response = res;
            console.log(this.response);
            if (this.response.status === 'SUCCESS') {
              this.router.navigate(['/chart-page']);
            } else {
              this.duplicate = true;
            }
          }
        );
    } else {
      this.allowSubmit = false;
    }
  }

}
