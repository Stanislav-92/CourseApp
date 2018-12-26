import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormDataService } from './form-data.service';

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

  constructor(private router: Router, private formDataService: FormDataService) { }

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
      this.formDataService.saveFormData(this.userForm.value);
      this.router.navigate(['/chart-page']);
    } else {
      this.allowSubmit = false;
    }
  }

}
