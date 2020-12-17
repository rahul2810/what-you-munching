import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'what-you-munching';
  munchItData : {userName : string, location: string, favFood: string, foodLink: string};

  munchItDisplay(data : {userName : string, location: string, favFood: string, foodLink: string}){
  this.munchItData = data;
  }
}
