import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() munchItData: {userName : string, location: string, favFood: string, foodLink: string};
  constructor() { }

  ngOnInit(): void {
  }

}
