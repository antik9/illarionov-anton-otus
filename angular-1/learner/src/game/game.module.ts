import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    BrowserModule,
    GameRoutingModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class GameModule { }
