import { Component, OnInit } from '@angular/core';
import { CoordinatesModel } from '../../../models/coordinates.model';
import { LocationService } from '../../../services/location.service';
import { PopularDetailsComponent } from '../popular-details/popular-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-five',
  imports: [PopularDetailsComponent, CommonModule],
  templateUrl: './top-five.component.html',
  styleUrl: './top-five.component.css'
})
export class TopFiveComponent implements OnInit{

  public constructor(private locationServices:LocationService){}
  public popularSearchList: CoordinatesModel[]; 


  public async ngOnInit() {
    try {
      this.popularSearchList = await this.locationServices.getPopularSearchList();       
    } catch (error:any) {
      console.log(error.message);
    }
  }
}
