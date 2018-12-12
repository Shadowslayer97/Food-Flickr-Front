import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public chosenFood: any = {};
  // private chosenFood = new Subject<any>();
  // public chosenFood$ = this.chosenFood.asObservable();

  constructor() { }

  updateChosenFood(food:any) {
    this.chosenFood = food;
  }
}
