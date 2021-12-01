import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { eventcardComponent } from '../app/_eventcard/eventcard.component';
import { AuthModule } from './auth/auth.module';
import { paymentboxComponent } from '../app/_paymentbox/paymentboxcomponent';

@NgModule({
  declarations: [AppComponent,
    eventcardComponent,
  paymentboxComponent],
  imports: [ BrowserModule,
    AppRoutingModule,
    AuthModule],
  providers: [],
  bootstrap: [AppComponent, eventcardComponent]
})
export class AppModule {

 }
