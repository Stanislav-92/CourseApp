import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  saveConfig(value) {
    const savedSorting = sessionStorage.setItem('key', JSON.stringify(value));
    return savedSorting;
  }

  getConfig() {
    const sessionedSorting = JSON.parse(sessionStorage.getItem('key'));
    return sessionedSorting;
  }

  constructor() { }
}
