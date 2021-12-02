import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './_navbar/navbar/navbar.component';
import { EventCardComponent } from './_eventCard/event-card/event-card.component';
import { PaymentBoxComponent } from './_paymentBox/payment-box/payment-box.component';

@NgModule({
  declarations: [AppComponent,
  NavbarComponent,
  EventCardComponent,
  PaymentBoxComponent],
  imports: [ BrowserModule,
    AppRoutingModule,
    AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
