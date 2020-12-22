import { Component, OnInit, Input } from '@angular/core';
import {Munchitformat} from '../munchitformat';
import { MunchitAPIService} from '../munchit-api.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  response : any;
  constructor(private _munchitService: MunchitAPIService) { }

  ngOnInit(): void {
    this.getDisplayData();
  }

  getDisplayData(){
  
    this._munchitService.getMunchIt().subscribe(data => {   
      this.response = data;
    });
  }

}
