import { RouterModule, Routes } from "@angular/router";
import { ListAppointmentsComponent } from "./list/list-appointment.component";
import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormComponent } from "./form/form.component";
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';

const routes: Routes =[
    {
        path:'list',
        component:ListAppointmentsComponent,
    },
    {
        path:'create',
        component:CreateAppointmentComponent,
    },
    {
        path:'delete',
        component:DeleteAppointmentComponent,
    },
    {
        path:'**',
         redirectTo:'list'
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports:[
        RouterModule
    ],
    declarations:[
        ListAppointmentsComponent,
        FormComponent,
        CreateAppointmentComponent,
        DeleteAppointmentComponent,
        EditAppointmentComponent,
    ],
})

export class appointmentRoutingModule{}