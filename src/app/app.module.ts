import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_navbar/navbar/navbar.component';
import { PaymentBoxComponent } from './_paymentBox/payment-box/payment-box.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent,
  NavbarComponent,
  PaymentBoxComponent,
    LoginComponent,
    EventsComponent,
    DashboardComponent,
    HomepageComponent,
    AboutusComponent,
    EventDetailsComponent
],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, CommonModule, RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
