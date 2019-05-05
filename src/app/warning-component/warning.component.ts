import {Component} from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent {
  warningMessage: string = undefined;
  constructor() {
    this.warningMessage = 'Warning';
  }
}
