import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import {NgbdDatepickerBasic  } from './calendar/calendar.component'

const routes: Routes =[
  {
    path:'**',
    component:ErrorComponent
  },
]

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports:[
    RouterModule,
  ]
})
export class SharedModule { }
