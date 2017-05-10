import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  race: Race;
  place: number = 12;

  constructor(private router: Router, private raceService: RaceService) {
    this.race = raceService.race;
    raceService.insert(this.race);
  }

  ngOnInit() {
  }

}
