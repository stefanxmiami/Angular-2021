import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any = [];


  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.events;
  }

}
