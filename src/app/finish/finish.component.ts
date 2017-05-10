import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RaceService } from '../race.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  player: string;
  time: number;
  place: number = 21;


  constructor(private router: Router, private raceService: RaceService) {
    this.player = raceService.player;
    this.time = raceService.time;
  }

  ngOnInit() {
  }

}
