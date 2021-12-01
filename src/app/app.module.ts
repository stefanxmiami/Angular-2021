import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { eventcardComponent } from './_eventcard/eventcard.component';
import { AuthModule } from './auth/auth.module';
import { paymentboxComponent } from '../_paymentbox/paymentboxcomponent';

@NgModule({
  declarations: [AppComponent, 
    eventcardComponent,
  paymentboxComponent],
  imports: [ BrowserModule, 
    AppRoutingModule, 
    AuthModule],
  providers: [],
  bootstrap: [AppComponent, eventcardComponent,paymentboxComponent]
})
export class AppModule {

 }
