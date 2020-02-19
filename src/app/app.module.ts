import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbarComponent/navbar.component';
import { AppBodyComponent } from './app-body/app-body.component';
import {ErrorComponent} from './error-component/error.component';
import {WarningComponent} from './warning-component/warning.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppBodyComponent,
    ErrorComponent,
    WarningComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
