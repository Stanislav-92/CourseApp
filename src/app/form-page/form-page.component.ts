import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  genders = ['Male', 'Female', 'Other'];
  colors = ['Black', 'Red', 'Green', 'Violet', 'Blue', 'Yellow', 'Other'];
  allowSubmit = true;
  @ViewChild('form') userForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.router.navigate(['/chart-page']);
    } else {
      this.allowSubmit = false;
    }
  }

}
