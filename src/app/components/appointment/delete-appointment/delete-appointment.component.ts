import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
})
export class DeleteAppointmentComponent {

  constructor(private modal:NgbModal,
    private router:Router,){}
  
  delete(){
    console.log("deleted");
    this.close()
  }

  close(){
    this.router.navigateByUrl('/appointments/list');
  }
}
