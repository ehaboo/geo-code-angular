import { Component } from '@angular/core';
import { AddressCoordinatesComponent } from '../address-coordinates/address-coordinates.component';
import { PopularAddressComponent } from '../popular-address/popular-address.component';
import { TopFiveComponent } from '../top-five/top-five.component';

@Component({
  selector: 'app-location-info',
  imports: [AddressCoordinatesComponent,PopularAddressComponent,TopFiveComponent],
  templateUrl: './location-info.component.html',
  styleUrl: './location-info.component.css'
})
export class LocationInfoComponent {

}
