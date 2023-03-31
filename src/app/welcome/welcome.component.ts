import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class welcomecomponent implements OnInit {

  @ViewChild('name') namekey!: ElementRef; 
  constructor() { }
  
  ngOnInit(): void {
    
  }
  StartQuiz(){
    localStorage.setItem("name",this.namekey.nativeElement.value);
  }   
}