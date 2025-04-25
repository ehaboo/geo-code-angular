import { Component, Input } from '@angular/core';
import { CoordinatesModel } from '../../../models/coordinates.model';

@Component({
  selector: 'app-popular-details',
  imports: [],
  templateUrl: './popular-details.component.html',
  styleUrl: './popular-details.component.css'
})
export class PopularDetailsComponent {

  @Input()
  public popular:CoordinatesModel;

}
