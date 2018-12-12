import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodIndividualComponent } from '../food-individual/food-individual.component';

const appRoutes: Routes = [
  {
    path: "food",
    component: FoodListComponent
  },
  {
    path: "",
    redirectTo: "/food",
    pathMatch: "full"
  },
  {
    path: "item",
    component: FoodIndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
