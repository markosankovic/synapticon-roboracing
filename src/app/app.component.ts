import { Component } from '@angular/core';

import { RaceService } from './race.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private raceService: RaceService) { }
}
