import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {
    path:'appointments',
    loadChildren:()=> import('./components/appointment/appointment.module').then(m=>m.appointmentRoutingModule)
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