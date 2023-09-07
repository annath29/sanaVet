import { Component, OnInit, Output, ViewChild } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { Appointment } from '../Interfaces/appointment.model';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
})
export class CreateAppointmentComponent implements OnInit {

  @Output() name:string='Agendar Nueva cita'
  appointment!:Appointment;

  constructor(
    private service:AppointmentService,
    private router:Router,
  ){}

  ngOnInit(): void {
  }

  create(data:Appointment){
    console.log("data en el create",data)
    this.appointment=data;
    this.service.saveAppointment(this.appointment)
    console.log("en el create despues de ir al servicio",this.appointment)
    this.cancel();
  }

  cancel(){
    this.router.navigateByUrl('/appointments/list');
  }  
 
}
