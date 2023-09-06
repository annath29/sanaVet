import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { patternComment } from './pattern-appointment';
import { AppointmentService } from '../../appointment/appointment.service';
import { Appointment } from '../../Interfaces/appointment.model';
import { Patient } from '../../Interfaces/patientsmodel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output() data = new EventEmitter<any>();
  @Output() close = new EventEmitter<{}>();

  constructor(private fb: FormBuilder,private service:AppointmentService){}
  appointment!:Appointment;
  patients:Patient[]=this.service.patients;
  id:number=this.service.id;
  hours:string[]=this.service.hours;
  public patientSelect:any;
  public hourSelect:any;
  selectedDate: Date = new Date();

  public myForm: FormGroup = this.fb.group({
    patient: ['',Validators.required],
    date: ['',Validators.required],
    hour: ['',Validators.required],
    comments:['',[Validators.required, Validators.pattern(patternComment)]],
  })

  

  isValid(field:string):boolean|null{
    return this.myForm.controls[field].getError('required') && this.myForm.controls[field].touched
  }

  save()
  {
    // this.data.emit({
    //   patient:this.service.findPattientById(this.patientSelect)
    // })

    console.log(this.appointment)

    this.appointment={
      id:this.id +1,
      patient:this.service.findPattientById(this.patientSelect),
      date:this.myForm.controls['date'].value,
      hour:this.myForm.controls['hour'].value,
      comments:this.myForm.controls['comments'].value,
    }
    //this.appointment=this.myForm.value
    this.service.saveAppointment(this.appointment)
    console.log("despues del save",this.appointment)
    //this.myForm.reset();
  }

}
