import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  events: any = [];
  eventDetails: any;

  constructor(private eventsService:EventsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.events = this.eventsService.events;
    this.eventDetails = this.events.find((ev: any)=>ev.id === +id);
  }

}
