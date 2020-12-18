import { Component } from '@angular/core';
import {Munchitformat} from './munchitformat';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'what-you-munching';
 munchItData1 = [];


  munchItPush(data : Munchitformat){
  this.munchItData1.push({userName : data.userName, 
    location: data.location, favFood: data.favFood, foodLink: data.foodLink});
    
  }
}
