import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events = [{name: 'eventOne', id:1 },{name: 'eventTwo', id:2 },{name: 'eventThree', id:3 }];

  constructor() { }
}
