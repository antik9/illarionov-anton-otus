import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { NavigationModule } from './navigation.module';
import { NavigationComponent } from './navigation.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    NavigationModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [NavigationComponent],
})
export class NavigationServerModule {}
