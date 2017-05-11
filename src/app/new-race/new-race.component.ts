import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.css']
})
export class NewRaceComponent implements OnInit {

  race: Race;

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.race = this.raceService.sharedRace = new Race();
  }

  onSubmit() {
    this.router.navigate(['/ready']);
  }

}
