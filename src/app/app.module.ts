import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RaceService } from './race.service';
import { SensorService } from './sensor.service';

import { AppComponent } from './app.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { NewRaceComponent } from './new-race/new-race.component';
import { CountdownComponent } from './countdown/countdown.component';
import { RaceComponent } from './race/race.component';
import { FinishComponent } from './finish/finish.component';
import { RaceTimePipe } from './race-time.pipe';
import { OrdinalPipe } from './ordinal.pipe';
import { ReadyStatePipe } from './ready-state.pipe';
import { WsComponent } from './ws/ws.component';
import { AutofocusDirective } from './autofocus.directive';
import { ReadyComponent } from './ready/ready.component';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighScoresComponent,
    NewRaceComponent,
    CountdownComponent,
    RaceComponent,
    FinishComponent,
    RaceTimePipe,
    OrdinalPipe,
    ReadyStatePipe,
    WsComponent,
    AutofocusDirective,
    ReadyComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HighScoresComponent
      },
      {
        path: 'countdown',
        component: CountdownComponent
      },
      {
        path: 'finish',
        component: FinishComponent
      },
      {
        path: 'high-scores',
        component: HighScoresComponent
      },
      {
        path: 'new-race',
        component: NewRaceComponent
      },
      {
        path: 'race',
        component: RaceComponent
      },
      {
        path: 'ready',
        component: ReadyComponent
      },
      {
        path: 'ws',
        component: WsComponent
      },
      {
        path: '**',
        component: HighScoresComponent
      }
    ])
  ],
  providers: [
    RaceService,
    SensorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
