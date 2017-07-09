import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppSearchComponent } from './search/app-search.component';

import { AppRoutingModule } from './app-routing.module';

import { ConfigurationService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
