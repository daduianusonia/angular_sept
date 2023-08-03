import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstname:string = "Sonia";
  lastname:string ="Daduianu";
  textH1:string ="";
  value:string ="";
  colorvalue:string='';
  fontColor:string ="";


  OnClick(){
  this.firstname = "Aria";
  this.lastname = "Crisan";
  this.textH1= "Am adaugat text";
  }

  Click2(){
    this.value = "Hello";
    alert(this.value);
  }

  Click3(){
    
    this.fontColor = this.colorvalue;
  }
}
