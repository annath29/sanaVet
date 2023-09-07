import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
})
export class CreateAppointmentComponent implements OnInit {
  @ViewChild('content') content: any;
  private modalRef:NgbModalRef |undefined
  constructor(
    private modal:NgbModal,
  ){}
  ngOnInit(): void {
  }

  openModal() {
    this.modalRef=this.modal.open(this.content, { centered: true });
  }

}
