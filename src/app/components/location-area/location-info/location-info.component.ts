import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressCoordinatesComponent } from '../address-coordinates/address-coordinates.component';
import { PopularAddressComponent } from '../popular-address/popular-address.component';
import { TopFiveComponent } from '../top-five/top-five.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-info',
  standalone: true,
  imports: [
    AddressCoordinatesComponent,
    PopularAddressComponent,
    TopFiveComponent,
    CommonModule,
  ],
  templateUrl: './location-info.component.html',
  styleUrl: './location-info.component.css',
})
export class LocationInfoComponent implements OnInit {
  public style: { display: string };

  @Input() searchVal: string;
  @Input() styleProp: string;

  public ngOnInit(): void {
    this.style = {
      display: this.styleProp,
    };
  }

  @Output()
  public reset = new EventEmitter<{
    resetDispaly: boolean;
    resetInput: string;
  }>();

  public resetValues(): void {
    this.reset.emit({ resetDispaly: false, resetInput: '' });
  }
}
