import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Race } from '../race';
import { RaceService } from '../race.service';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: Race;
  bestTime: number; // in milliseconds

  subscription: Subscription;
  startTime: number = Date.now();
  endTime: number = Date.now();

  sensorTimeoutId: number;
  boundSensorListener: EventListenerOrEventListenerObject;

  constructor(private router: Router, private raceService: RaceService, private sensorService: SensorService) { }

  ngOnInit() {
    const sortedRaces = this.raceService.races.sort((a, b) => a.time - b.time);
    if (sortedRaces.length > 0) {
      this.bestTime = sortedRaces[0].time;
    }

    this.race = this.raceService.sharedRace;

    const observable = Observable.timer(0, 1);
    this.subscription = observable.subscribe((val) => {
      this.endTime = Date.now();
      this.race.time = this.endTime - this.startTime;
    });

    this.sensorTimeoutId = window.setTimeout(() => {
      this.boundSensorListener = this.sensorListener.bind(this);
      this.sensorService.ws.addEventListener('message', this.boundSensorListener);
    }, 5000);
  }

  sensorListener(ev) {
    if (Number.parseInt(ev.data) === 0) {
      this.onFinish();
    }
  }

  onFinish() {
    this.router.navigate(['/finish']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.sensorService.ws.removeEventListener('message', this.boundSensorListener);
    window.clearTimeout(this.sensorTimeoutId);
  }

}
