import { Component, OnInit } from '@angular/core';
import { ForeignService } from '../foreign.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  private dishList: any = [];

  constructor(private _foreignService: ForeignService) { }

  ngOnInit() {
    console.log("work");
    this._foreignService.getDishPics({}).subscribe(result => {
      console.log(result);
    })
  }

}
