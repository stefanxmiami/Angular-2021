import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events = [
    { name: 'Blue Ocean', id: 1, shortDescription: 'Your gift to Blue Ocean Society for Marine Conservation helps protect marine life in the Gulf of Maine and beyond.'},
    { name: 'Air Polution', id: 2, shortDescription: 'Please donate to an award-winning charity fighting air pollution. We need all the help we can get to fight gasoline and the huge impact it has on airs.' },
    { name: 'ShareTheMeal', id: 3, shortDescription: '1 in 9 children goes to bed hungry every night. Start giving with ShareTheMeal. Be part of the generation that ends hunger.' },
    { name: 'Autism', id: 4, shortDescription: 'Make a donation in support of autism!'},
    { name: 'HealthCare', id: 5, shortDescription: 'Healthcare fundraising is essential for securing staffing, equipment, and facility upgrades. Exceed your donation goals with these foolproof strategies!'},
    { name: 'COVID-19', id: 6, shortDescription: 'People and organizations who want to help fight the pandemic and support WHO and partners can now donate.'},
  ];



  constructor() {}
}
