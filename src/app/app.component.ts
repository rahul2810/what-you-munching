import { Component, EventEmitter, Output  } from '@angular/core';
import {Munchitformat} from './munchitformat';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'what-you-munching';
 munchItData1 = [];
 @Output() munchItDataAdded = new EventEmitter<any>();

  munchItPush(data : Munchitformat){
  this.munchItData1.push({username : data.username, 
    location: data.location, favouritefood: data.favouritefood, foodlink: data.foodlink});
    this.munchItDataAdded.emit("Data Added"); 
  }
}
