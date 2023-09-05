import { Patient } from "./patientsmodel";

export interface Appointment{
    id: string ,
    patient: Patient,
    date: Date,
    hour: string,
    comments:string,
}