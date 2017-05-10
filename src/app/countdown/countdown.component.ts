import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { RaceService } from '../race.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  player: string;
  countdown: number = 3;

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.player = this.raceService.player;
    const observable = Observable.timer(1000, 1000);
    const subscription = observable.subscribe(() => {
      if (this.countdown > 0) {
        --this.countdown;
      } else {
        subscription.unsubscribe();
        this.router.navigate(['/race']);
      }
    });
  }
}
