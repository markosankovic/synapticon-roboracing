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
  position: number;

  finishTimeoutId: number;

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.race = this.raceService.sharedRace;
    const insertedRace = this.raceService.insertRace(new Race(this.race.player, this.race.time));
    this.position = this.raceService.races.sort((a, b) => a.time - b.time).indexOf(insertedRace) + 1;

    this.finishTimeoutId = window.setTimeout(() => {
      this.router.navigate(['/high-scores']);
    }, 10000);
  }

  ngOnDestroy() {
    window.clearTimeout(this.finishTimeoutId);
  }

}
