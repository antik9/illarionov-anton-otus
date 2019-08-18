import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { AppComponent } from '../app/app.component';
import { GameComponent } from '../game/game.component';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    GameComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    NavigationRoutingModule
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class NavigationModule { }
