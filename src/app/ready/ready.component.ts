import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Race } from '../race';
import { RaceService } from '../race.service';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  race: Race;

  boundSensorListener: EventListenerOrEventListenerObject;

  constructor(private router: Router, private raceService: RaceService, private sensorService: SensorService) { }

  ngOnInit() {
    this.race = this.raceService.sharedRace;

    this.boundSensorListener = this.sensorListener.bind(this);
    this.sensorService.ws.addEventListener('message', this.boundSensorListener);
  }

  sensorListener(ev) {
    if (Number.parseInt(ev.data) === 0) {
      this.router.navigate(['/race']);
    }
  }

  ngOnDestroy() {
    this.sensorService.ws.removeEventListener('message', this.boundSensorListener);
  }

}
