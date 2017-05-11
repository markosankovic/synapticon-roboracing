import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  race: Race;
  countdown: number = 3;

  subscription: Subscription;

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.race = this.raceService.sharedRace;

    const observable = Observable.timer(1000, 1000);
    this.subscription = observable.subscribe(() => {
      if (this.countdown > 0) {
        --this.countdown;
      } else {
        this.router.navigate(['/race']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
