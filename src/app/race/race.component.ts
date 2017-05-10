import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { RaceService } from '../race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  player: string;
  time: number;
  bestTime: number = 10000; // in milliseconds

  subscription: Subscription;
  startTime: number = Date.now();
  endTime: number = Date.now();

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.player = this.raceService.player;
    this.time = Date.now();
    const observable = Observable.timer(0, 1);
    this.subscription = observable.subscribe((val) => {
      this.endTime = Date.now();
      this.time = this.endTime - this.startTime;
    });
  }

  onFinish() {
    this.subscription.unsubscribe();
    this.raceService.time = this.time;
    this.router.navigate(['/finish']);
  }

}
