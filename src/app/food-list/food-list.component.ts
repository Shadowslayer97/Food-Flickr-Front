import { Component, OnInit } from '@angular/core';
import { ForeignService } from '../foreign.service';
import { SharedService } from "../shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  private foodList: any = [];

  constructor(private _foreignService: ForeignService,private _sharedService: SharedService,private router: Router) { }

  ngOnInit() {
    console.log("work");
    this._foreignService.getDishPics({}).subscribe(result => {
      console.log(result);
      this.foodList = result.photos.photo;
    })
  }

  getImageUrl(food:any): string {
    return this._foreignService.formFlickrData(food);
  }

  getInitialStars(id:string): number {
    if(localStorage.getItem('pid'+id)!=null) {
      return JSON.parse(localStorage.getItem('pid'+id)).reviewStars;
    }
    else return 0;
  }

  foodSelected(food:any) {
    this._sharedService.updateChosenFood(food);
    this.router.navigate(['/item']);
  }

}
