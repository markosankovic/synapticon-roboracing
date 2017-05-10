import { Component, OnInit } from '@angular/core';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

  races: Array<Race>;

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.races = this.raceService.races.sort((a, b) => a.time - b.time).slice(0, 5);
  }

}
