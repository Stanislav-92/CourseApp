import { Injectable } from '@angular/core';
import { IFormData } from '../interfaces/formDataInterface';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  formData: IFormData;

  constructor() { }

  saveFormData(data: IFormData) {
    this.formData = data;
  }

}
