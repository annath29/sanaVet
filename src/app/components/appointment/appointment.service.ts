import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  appointments:Appointment[]=[ 
    { id: "1", patient:  { id: 1, name: 'Opción 1',age:23,weigth:27,owner:"memo" }, date: new Date('2023-09-3'), hour: '10:00 AM',comments:'patita' },    
    { id: "2", patient: { id: 2, name: 'Opción 2',age:23,weigth:27,owner:"memo" }, date: new Date('2023-09-5'), hour: '10:20 AM',comments:'cirugia'},
  ]
  
  patients: any[] = [
    { id: 1, name: 'Opción 1',age:23,weigth:27,owner:"memo" },
    { id: 2, name: 'Opción 2',age:23,weigth:27,owner:"memo" },
    { id: 3, name: 'Opción 3',age:23,weigth:27,owner:"memo" },
    // Agrega más datos según tus necesidades
  ];

  getAll():Appointment[]{
    return this.appointments;
  }
  // Agregar una nueva cita
  saveAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }
}
