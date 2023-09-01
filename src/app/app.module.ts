import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListAppointmentsComponent } from './components/appointment/list/list-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAppointmentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
