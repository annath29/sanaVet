import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Interfaces/appointment.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointment.component.html',
})
export class ListAppointmentsComponent implements OnInit{
  constructor(
    config: NgbModalConfig,
    private router:Router,
    private service:AppointmentService,
    private modal: NgbModal
  ){
    config.backdrop = 'static';
		config.keyboard = false;
  }

  appointments:Appointment[]=[];
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appointments=this.service.getAll(); 
    this.orderAppointments(this.appointments);
    console.log(this.appointments)
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

  // create(content:any) {
	// 	this.modal.open(content, { centered:true })	;
	// }

  create(){
    this.router.navigateByUrl('/appointments/create')
  }

  // delete(remove:TemplateRef<any>){
  //   this.modal.open(remove, {centered:true});
  // }

  delete()
  {
    this.router.navigateByUrl('/appointments/delete');
  }

}
