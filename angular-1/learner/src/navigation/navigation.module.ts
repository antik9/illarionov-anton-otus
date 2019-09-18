import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { AppModule } from '../app/app.module';
import { GameModule } from '../game/game.module';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NavigationRoutingModule,
    HttpClientModule,
    AppModule,
    GameModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class NavigationModule { }
