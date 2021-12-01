import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { eventcardComponent } from 'src/_eventcard/eventcard.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, eventcardComponent],
  imports: [ BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
