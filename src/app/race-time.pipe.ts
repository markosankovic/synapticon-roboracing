import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raceTime'
})
export class RaceTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const ms = Number.parseInt(value, 10);
    const minutes = (ms / 1000 / 60) << 0;
    const seconds = (ms / 1000) % 60 << 0;
    const milliseconds = (ms - (minutes * 1000 * 60) - (seconds * 1000)) << 0;
    const millis = (milliseconds / 1000).toString().substr(2);
    return (minutes + ':' + (seconds < 10 ? '0' : '') + seconds + '.' + millis).substr(0, 7);
  }

}
