import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { NavigationServerModule } from './navigation/navigation.server.module';
export { ngExpressEngine } from "@nguniversal/express-engine";
export { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

