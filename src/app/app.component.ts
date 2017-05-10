import { Component } from '@angular/core';

import { RaceService } from './race.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private raceService: RaceService) { }

  clearRaces() {
    this.raceService.clearRaces();
  }
}
