import { Component, OnInit } from '@angular/core';
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
    this.orderAppointments(this.appointments);
  }

  orderAppointments(arr:any[]){
    arr.sort((a,b)=>
    {
      if(a.date.getTime() !== b.date.getTime()){
        return a.date.getTime()- b.date.getTime()
        
      }
      else{      
        const hourA=a.hour;
        const hourB=b.hour;
  
        if(hourA<hourB){
          return  -1;
        }
        if(hourB<hourA){
          return 1;
        }
        return 0;        
      
      }
    })
  }

}
