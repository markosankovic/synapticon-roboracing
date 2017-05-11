import { Component, OnInit } from '@angular/core';

import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.css']
})
export class WsComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
  }

}
