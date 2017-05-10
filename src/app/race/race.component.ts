import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: Race;
  bestTime: number = 12345; // in milliseconds

  subscription: Subscription;
  startTime: number = Date.now();
  endTime: number = Date.now();

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.race = this.raceService.race;
    const observable = Observable.timer(0, 1);
    this.subscription = observable.subscribe((val) => {
      this.endTime = Date.now();
      this.race.time = this.endTime - this.startTime;
    });
  }

  onFinish() {
    this.router.navigate(['/finish']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
