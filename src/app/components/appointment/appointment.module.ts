import { RouterModule, Routes } from "@angular/router";
import { ListAppointmentsComponent } from "./list/list-appointment.component";
import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateComponent } from "./create/create.component";
import { FormComponent } from "./form/form.component";
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';

const routes: Routes =[
    {
        path:'list',
        component:ListAppointmentsComponent,
    },
    {
        path:'create',
        component:CreateComponent,
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
    ],
})

export class appointmentRoutingModule{}