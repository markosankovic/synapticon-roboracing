import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readyState'
})
export class ReadyStatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let readyState = Number.parseInt(value, 10);
    if (readyState === WebSocket.CLOSED) {
      return 'CLOSED';
    } else if (readyState === WebSocket.CLOSING) {
      return 'CLOSING';
    } else if (readyState === WebSocket.CONNECTING) {
      return 'CONNECTING';
    } else if (readyState === WebSocket.OPEN) {
      return 'OPEN';
    }
  }

}
