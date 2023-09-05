import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
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
    FormComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NgbdDatepickerBasic,
    ReactiveFormsModule,
  ],
  exports:[
    RouterModule,
    NgbdDatepickerBasic,
  ]
})
export class SharedModule { }
