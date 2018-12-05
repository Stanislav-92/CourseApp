import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tablepipe' })

export class RainfallMetricsPipe implements PipeTransform {
  transform(value) {
    return (!isNaN(value)) ? (Math.round(value) + ' mm')  : value;
  }
}
