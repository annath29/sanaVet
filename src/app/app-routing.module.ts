import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/shared/form/form.component';
import {  NgbdDatepickerBasic, } from './components/shared/calendar/calendar.component';
const routes:Routes=[
  {
    path:'appointments',
    loadChildren:()=> import('./components/appointment/appointment.module').then(m=>m.appointmentRoutingModule)
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'calendar',
    component: NgbdDatepickerBasic,
  },
  {
    path:'404',
    loadChildren:()=> import('./components/shared/shared.module').then(m=>m.SharedModule)
  },
  {
    path:'**',
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
