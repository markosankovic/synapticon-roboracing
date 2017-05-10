import { Injectable } from '@angular/core';

import { Race } from './race';

@Injectable()
export class RaceService {

  /**
   * Shared race that will be inserted into this.races once the race is over.
   */
  sharedRace: Race = new Race();

  /**
   * Array of finished races persisted in localStorage.
   */
  races: Array<Race> = [];

  constructor() {
    const races = JSON.parse(localStorage.getItem('races'));
    if (races) {
      this.races = races.map(race => new Race(race.player, race.time));
    }
  }

  /**
   * Insert race into this.races and save to localStorage.
   */
  insertRace(race: Race): Race {
    if (!race.player || !race.time) {
      throw new Error('Race to insert has no player or time!');
    }
    this.races.push(race);
    localStorage.setItem('races', JSON.stringify(this.races));
    return race;
  }

  clearRaces() {
    localStorage.setItem(`races.backup.${Date.now()}`, JSON.stringify(this.races));
    localStorage.removeItem('races');
    this.races = [];
  }
}
