import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events = [
    { name: 'eventOne', id: 1, shortDescription: 'descr1', funds: 5 },
    { name: 'eventTwo', id: 2, shortDescription: 'descr2', funds: 6 },
    { name: 'eventThree', id: 3, shortDescription: 'descr3', funds: 4 },
  ];



  constructor() {}
}
