import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  saveConfig(value) {
    const savedSorting = sessionStorage.setItem('key', JSON.stringify(value));
    console.log(savedSorting);
    return savedSorting;
  }

  getConfig() {
    const sessionedSorting = JSON.parse(sessionStorage.getItem('key'));
    console.log(sessionedSorting);
    return sessionedSorting;
  }

  constructor() { }
}
