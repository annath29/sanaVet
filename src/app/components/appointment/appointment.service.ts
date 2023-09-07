import { Injectable } from '@angular/core';
import { Appointment } from './Interfaces/appointment.model';
import { Patient } from './Interfaces/patientsmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointments:Appointment[]=[]
  id:number=this.appointments.length;

  // appointments:Appointment[]=[ 
  //   { id: 1, patient:  { id: 1, name: 'Opción 1',age:23,weigth:27,owner:"memo" }, date: new Date('2023-09-3'), hour: '10:00 AM',comments:'patita' },    
  //   { id: 2, patient: { id: 2, name: 'Opción 2',age:23,weigth:27,owner:"memo" }, date: new Date('2023-09-5'), hour: '08:20 AM',comments:'cirugia'},
  //   { id: 4, patient: { id: 2, name: 'Opción 2',age:23,weigth:27,owner:"memo" }, date: new Date('2023-09-5'), hour: '10:00 AM',comments:'cirugia'},
  //   { id: 3, patient: { id: 3, name: 'Opción 2',age:23,weigth:27,owner:"memo" }, date: new Date('2023-09-4'), hour: '10:20 AM',comments:'cirugia'},
  // ]
  // appointments:Appointment[]=[ 
  //   { id: "1", patient: "pepe", date: new Date('2023-09-3'), hour: '10:00 AM',comments:'patita' },    
  //   { id: "2", patient: "pepe", date: new Date('2023-09-5'), hour: '08:20 AM',comments:'cirugia'},
  //   { id: "4", patient: "pepe", date: new Date('2023-09-5'), hour: '10:00 AM',comments:'cirugia'},
  //   { id: "3", patient: "pepe", date: new Date('2023-09-4'), hour: '10:20 AM',comments:'cirugia'},
  // ]
  
  patients: Patient[] = [
    { id: 1, name: 'Paco',age:23,weigth:27,owner:"memo" },
    { id: 2, name: 'Manchas',age:23,weigth:27,owner:"memo" },
    { id: 3, name: 'Oso',age:23,weigth:27,owner:"memo" },
  ];

  hours:string[]=[
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00'
  ]

  getAll():Appointment[]{
    return this.appointments;
  }

  saveAppointment(appointment: Appointment){
    console.log("en el servcio llega",appointment)
    this.appointments.push(appointment);
    console.log("en el servcio tengo las appointments",this.appointments)
  }

  findPattientById(id:number):Patient{    
    const patient =this.patients.find(item => item.id ==id);
    if( patient== undefined){
      throw new Error("el id no existe");
    }
  
    return patient;
  }

  findAppointmentById(id:number):Appointment{
    const appointment =this.appointments.find(item => item.id ==id);
    if( appointment== undefined){
      throw new Error("el id no existe");
    }  
    return appointment;
  }
}
