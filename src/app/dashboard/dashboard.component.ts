import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  titleField = '';
  descriptionField = '';

  events: any = [];

  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.events;
  }


  onClick(event:any){
    this.events = this.events.filter((el:any) => el.id !== event.id)
  }

  onSubmit(){
    const newEvent = {name : this.titleField, description : this.descriptionField, id : this.events.length+1};
    this.events.push(newEvent);
  }

}
