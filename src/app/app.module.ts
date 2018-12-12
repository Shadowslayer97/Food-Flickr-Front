import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxStarsModule } from 'ngx-stars';
import { FoodIndividualComponent } from './food-individual/food-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodIndividualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
