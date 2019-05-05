import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../app.component.scss']
})
export class NavbarComponent {
  navs = ['Home', 'Components', 'Documentation', 'Themes', 'Examples'];
}
