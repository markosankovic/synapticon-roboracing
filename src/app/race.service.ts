import { Injectable } from '@angular/core';

import { Race } from './race';

@Injectable()
export class RaceService {

  race: Race = new Race();
  races: Array<Race> = [];

  constructor() { }

  insert(race: Race) {
    this.races.push(race);
  }
}
