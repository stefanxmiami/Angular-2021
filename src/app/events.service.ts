import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events = [
    { name: 'eventOne', id: 1, shortDescription: 'descr1' },
    { name: 'eventTwo', id: 2, shortDescription: 'descr2' },
    { name: 'eventThree', id: 3, shortDescription: 'descr3' },
  ];

  constructor() {}
}
