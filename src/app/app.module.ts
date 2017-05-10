import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { NewRaceComponent } from './new-race/new-race.component';
import { CountdownComponent } from './countdown/countdown.component';
import { RaceComponent } from './race/race.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    HighScoresComponent,
    NewRaceComponent,
    CountdownComponent,
    RaceComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'high-scores',
        component: HighScoresComponent
      },
      {
        path: 'new-race',
        component: NewRaceComponent
      },
      {
        path: 'countdown',
        component: CountdownComponent
      },
      {
        path: 'race',
        component: RaceComponent
      },
      {
        path: 'finish',
        component: FinishComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
