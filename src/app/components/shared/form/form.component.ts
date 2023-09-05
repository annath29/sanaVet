import { Component } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { patternComment } from './pattern-appointment';
import { AppointmentService } from '../../appointment/appointment.service';
import { Patient } from '../../appointment/patientsmodel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  constructor(private fb: FormBuilder,private service:AppointmentService){}
   
  patients:any[]=this.service.patients;
  public optionSelect:number=1;
  selectedDate: Date = new Date();

  public myForm: FormGroup = this.fb.group({
    patient: ['',Validators.required],
    date: ['',Validators.required],
    hour: ['',Validators.required],
    comments:['',[Validators.required, Validators.pattern(patternComment)]],
  })

}
