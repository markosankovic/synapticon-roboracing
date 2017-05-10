import { Injectable } from '@angular/core';

import { Race } from './race';

@Injectable()
export class RaceService {

  race: Race = new Race();

  constructor() { }

}
