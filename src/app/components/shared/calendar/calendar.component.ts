import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'ngbd-datepicker-basic',
	standalone: true,
	imports: [NgbDatepickerModule, FormsModule, JsonPipe],
	templateUrl: './calendar.component.html',
})
export class NgbdDatepickerBasic {
	model:any;
	date:any=this.selectToday();

	constructor(private calendar: NgbCalendar) {}

	selectToday() {
		this.model = this.calendar.getToday();
	}
}
