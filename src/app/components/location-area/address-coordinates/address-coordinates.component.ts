import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { CoordinatesModel } from '../../../models/coordinates.model';
import { NotifyService } from '../../../services/notify-service';

@Component({
  selector: 'app-address-coordinates',
  standalone: true,
  imports: [],
  templateUrl: './address-coordinates.component.html',
  styleUrl: './address-coordinates.component.css',
})
export class AddressCoordinatesComponent implements OnInit {
  public constructor(
    private locationServices: LocationService,
    private notifyService: NotifyService
  ) {}

  public coordinates: CoordinatesModel;

  @Input() address: string;

  public async ngOnInit(): Promise<void> {
    try {
      this.coordinates = 
        await this.locationServices.getCoordinats(this.address);
    } catch (error: any) {
      this.notifyService.error(error);
    }
  }
}
