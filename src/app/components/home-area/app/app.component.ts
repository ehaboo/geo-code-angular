import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationInfoComponent } from '../../location-area/location-info/location-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [LocationInfoComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public isDisplay:boolean = false; 
  public address:string; 

  public handleSubmit(e:Event){
    e.preventDefault(); 
    this.isDisplay = !this.isDisplay; 
  }
  
  public resetValues(val: { resetDispaly: boolean, resetInput:string }){
    this.isDisplay = val.resetDispaly; 
    this.address = val.resetInput; 
  }
}
