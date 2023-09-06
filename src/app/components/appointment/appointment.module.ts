import { RouterModule, Routes } from "@angular/router";
import { ListAppointmentsComponent } from "./list/list-appointment.component";
import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateComponent } from "./create/create.component";

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
        CommonModule
    ],
    exports:[
        RouterModule
    ],
    declarations:[
        ListAppointmentsComponent,
        CreateComponent
    ],
})

export class appointmentRoutingModule{}