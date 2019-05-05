import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h3 class="alert-danger">{{errorMessage}}</h3>`,
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorMessage = undefined;
  constructor() {
    this.errorMessage = 'Error';
  }

  ngOnInit() {
  }
}
