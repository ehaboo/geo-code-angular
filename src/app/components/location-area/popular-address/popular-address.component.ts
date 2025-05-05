import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { CoordinatesModel } from '../../../models/coordinates.model';
import { NotifyService } from '../../../services/notify-service';

@Component({
  selector: 'app-popular-address',
  imports: [],
  templateUrl: './popular-address.component.html',
  styleUrl: './popular-address.component.css',
})
export class PopularAddressComponent implements OnInit {
  public constructor(
    private locationServices: LocationService,
    private notifyService: NotifyService
  ) {}

  public popularSearch: CoordinatesModel;

  public async ngOnInit(): Promise<void> {
    try {
      this.popularSearch = 
        await this.locationServices.getPopularSearch();
    } catch (error: any) {
      this.notifyService.error(error);
    }
  }
}
