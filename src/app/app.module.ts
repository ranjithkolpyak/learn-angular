import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbarComponent/navbar.component';
import { AppBodyComponent } from './app-body/app-body.component';
import {ErrorComponent} from './error-component/error.component';
import {WarningComponent} from './warning-component/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppBodyComponent,
    ErrorComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
