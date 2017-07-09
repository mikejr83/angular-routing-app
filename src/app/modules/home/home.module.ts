import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { AppRoutingModule } from './home-routes.module';

@NgModule({
  imports: [AppRoutingModule],
  declarations: [HomeComponent]
})
export class HomeModule {

}
