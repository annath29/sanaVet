import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  appointments:Appointment[]=[ 
    { id: "1", patient: "Pepito", date: new Date('2023-09-3'), hour: '10:00 AM',comments:'patita' },    
    { id: "2", patient: "Manchas", date: new Date('2023-09-5'), hour: '10:20 AM',comments:'cirugia'},
  ]
  
  getAll():Appointment[]{
    return this.appointments;
  }
}
