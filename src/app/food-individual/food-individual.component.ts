import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs/Subscription';
import { ForeignService } from '../foreign.service';


@Component({
  selector: 'app-food-individual',
  templateUrl: './food-individual.component.html',
  styleUrls: ['./food-individual.component.css']
})
export class FoodIndividualComponent implements OnInit {

  public subscriber: Subscription;
  public chosenFood: any = {};
  public userReview: any = {};
  public initialStars: number = 0;

  constructor(private _sharedService: SharedService, private _foreignService: ForeignService) { }

  ngOnInit() {
    if(localStorage.getItem('pid'+this._sharedService.chosenFood.id)!=null) {
      this.userReview = JSON.parse(localStorage.getItem('pid'+this._sharedService.chosenFood.id));
      this.initialStars = this.userReview.reviewStars;
    }
    this._foreignService.getDishInfo(this._sharedService.chosenFood.id).subscribe(result => {
      this.chosenFood = result.photo;
      console.log(this.chosenFood);
    },error => {
      console.log(error);
    });

  }

  getImageUrl() {
    return this._foreignService.formFlickrData(this.chosenFood);
  }

  onRatingSet(stars:any) {
    this.userReview.reviewStars = stars;
  }

  createPhotoReview() {
    console.log(this.userReview);

    if(this.userReview["reviewText"] || this.userReview["reviewText"].length!==0) {
      localStorage.setItem('pid'+this.chosenFood.id,JSON.stringify(this.userReview));
      this._foreignService.createToast("Review added successfully","green");
    }
    else {
      this._foreignService.createToast("Please provide your opinion","red");
    }
  }
}
