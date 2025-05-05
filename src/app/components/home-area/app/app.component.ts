import { Component, Output } from '@angular/core';
import { LocationInfoComponent } from '../../location-area/location-info/location-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotifyService } from '../../../services/notify-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocationInfoComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public constructor(private notifyService: NotifyService) {}
  public isDisplay: boolean = false;
  public address: string = '';

  public handleSubmit(e: Event) {
    e.preventDefault();
    if (!this.isDisplay && this.address?.trim() === '') {
      this.notifyService.error('נא להזין כתובת.');
    } else {
      this.isDisplay = !this.isDisplay;
    }
  }

  public resetValues(val: { resetDispaly: boolean; resetInput: string }) {
    this.isDisplay = val.resetDispaly;
    this.address = val.resetInput;
  }
}
