import { Component, OnInit, Input } from '@angular/core';
import { MunchitAPIService} from '../munchit-api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  response : any;
  subscription: Subscription;
  constructor(private _munchitService: MunchitAPIService) { 
    this.subscription = this._munchitService.observeMunch().subscribe(response =>
      {this.getDisplayData();}
      );
  }

  ngOnInit(): void {
    this.getDisplayData();
  }

  getDisplayData(){
  
    this._munchitService.getMunchIt().subscribe(data => {
      this.response = data;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
