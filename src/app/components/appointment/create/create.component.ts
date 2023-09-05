import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {

  constructor(private service:AppointmentService){

  }

  createAppointment()
  {
    
  }
}
