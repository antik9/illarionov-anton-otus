import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    SettingsRoutingModule
  ],
  providers: [],
  bootstrap: [SettingsComponent]
})
export class SettingsModule { }
