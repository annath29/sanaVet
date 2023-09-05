import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import localesEsCO from '@angular/common/locales/es-CO'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localesEsCO)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
