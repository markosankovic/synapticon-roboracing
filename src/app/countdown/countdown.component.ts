import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  countdown: number = 3;

  constructor(private router: Router) { }

  ngOnInit() {
    const timer = Observable.timer(1000, 1000);
    const subscribe = timer.subscribe(() => {
      if (this.countdown > 0) {
        --this.countdown;
      } else {
        subscribe.unsubscribe();
        this.router.navigate(['/race']);
      }
    });
  }
}
