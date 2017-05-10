import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RaceService } from '../race.service';

@Component({
  selector: 'app-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.css']
})
export class NewRaceComponent implements OnInit {

  player: string;

  constructor(private router: Router, private raceService: RaceService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.raceService.player = this.player;
    this.router.navigate(['/countdown']);
  }

}
