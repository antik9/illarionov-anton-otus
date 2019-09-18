import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { GameComponent } from '../game/game.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
