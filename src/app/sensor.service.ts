import { Injectable } from '@angular/core';

@Injectable()
export class SensorService {

  ws: WebSocket;

  constructor() {
    this.connect();
  }

  connect() {
    this.ws = new WebSocket("ws://localhost:8765");
    this.ws.onclose = (ev) => {
      console.log('ws.onclose', ev);
    };
    this.ws.onerror = (ev) => {
      console.log('ws.onerror', ev);
    };
    this.ws.onmessage = (ev) => {
      console.log('ws.onmessage', ev);
    };
    this.ws.onopen = (ev) => {
      console.log('ws.onopen', ev);
    };
  }
}
