import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { patternComment } from './pattern-appointment';
import { AppointmentService } from '../../appointment/appointment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output() data = new EventEmitter<any>();
  @Output() close = new EventEmitter<{}>();

  constructor(private fb: FormBuilder,private service:AppointmentService){}
   
  patients:any[]=this.service.patients;
  hours:any[]=this.service.hours;
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
    this.data.emit(this.myForm.value)
  }

}
