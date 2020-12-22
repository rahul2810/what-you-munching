import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {Munchitformat} from '../munchitformat';
import { MunchitAPIService} from '../munchit-api.service';
  
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedvalue = "Enter Location";
  @Output() munchItEvent = new EventEmitter<Munchitformat>();
  constructor(private _munchitService: MunchitAPIService) { }
  @ViewChild('username',{static:true}) username: ElementRef;
  @ViewChild('food',{static:true}) food: ElementRef;
  @ViewChild('foodlink',{static:true}) foodlink: ElementRef;
  ngOnInit(): void {
    
  }
  dropdownselect(val){
    this.selectedvalue = val;
  }
  munchit(){
    let sendData = {username: this.username.nativeElement.value, location: this.selectedvalue, favouritefood: this.food.nativeElement.value, foodlink: this.foodlink.nativeElement.value};
    this._munchitService.postMunchIt(sendData);
    this.munchItEvent.emit(sendData);
  }
}
