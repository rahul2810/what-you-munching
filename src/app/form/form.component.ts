import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedvalue = "Enter Location";
  @Output() munchItEvent = new EventEmitter<{userName : string, location: string, favFood: string, foodLink: string}>();
  constructor() { }
  @ViewChild('username',{static:true}) username: ElementRef;
  @ViewChild('food',{static:true}) food: ElementRef;
  @ViewChild('foodlink',{static:true}) foodlink: ElementRef;
  ngOnInit(): void {
  }
  dropdownselect(val){
    this.selectedvalue = val;
  }
  munchit(){
    this.munchItEvent.emit({userName:this.username.nativeElement.value, location: this.selectedvalue, favFood: this.food.nativeElement.value, foodLink: this.foodlink.nativeElement.value});
  }
}
