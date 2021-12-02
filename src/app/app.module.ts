import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_navbar/navbar/navbar.component';
import { EventCardComponent } from './_eventCard/event-card/event-card.component';
import { PaymentBoxComponent } from './_paymentBox/payment-box/payment-box.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [AppComponent,
  NavbarComponent,
  EventCardComponent,
  PaymentBoxComponent,
    LoginComponent,
    EventsComponent,
    DashboardComponent,
    HomepageComponent
],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
