import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointment.component.html',
})
export class ListAppointmentsComponent implements OnInit{
  constructor(private service:AppointmentService){}

  public appointments:Appointment[]=[];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appointments=this.service.getAll();
  }
}
