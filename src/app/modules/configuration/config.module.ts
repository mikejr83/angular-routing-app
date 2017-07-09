import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfigComponent } from './config.component';
import { ConfigHeaderComponent } from './header/config-header.component';
import { ConfigGeneralComponent } from './config-general.component';
import { ConfigOtherComponent } from './config-other.component';
import { ConfigRoutingModule } from './config-routes.module';

@NgModule({
  imports: [
    ConfigRoutingModule,
    NgbModule
  ],
  declarations: [
    ConfigComponent,
    ConfigHeaderComponent,
    ConfigGeneralComponent,
    ConfigOtherComponent
  ]
})
export class ConfigModule {

}
