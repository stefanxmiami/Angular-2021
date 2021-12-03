import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events = [
    { name: 'Blue Ocean', id: 1, shortDescription: 'Your gift to Blue Ocean Society for Marine Conservation helps protect marine life in the Gulf of Maine and beyond.', funds: 300},
    { name: 'Air Polution', id: 2, shortDescription: 'Please donate to an award-winning charity fighting air pollution. We need all the help we can get to fight gasoline and the huge impact it has on airs.', funds: 500 },
    { name: 'ShareTheMeal', id: 3, shortDescription: '1 in 9 children goes to bed hungry every night. Start giving with ShareTheMeal. Be part of the generation that ends hunger.', funds: 900},
  ];



  constructor() {}
}
