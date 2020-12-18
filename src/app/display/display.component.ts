import { Component, OnInit, Input } from '@angular/core';
import {Munchitformat} from '../munchitformat';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() munchItData = [];
  
  // munchItData2 = [{userName : 'Priyanka', location: 'Korea', favFood: 'Biryani', foodLink: 'http://www.google.com'}];
 
 
  constructor() { }

  ngOnInit(): void {
    // this.munchItData.push({userName : 'Priyanka', location: 'Korea', favFood: 'Biryani', foodLink: 'http://www.google.com'});
  }

}
