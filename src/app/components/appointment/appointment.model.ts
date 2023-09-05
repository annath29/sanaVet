import { Patient } from "./patientsmodel";

export interface Appointment{
    id: string ,
    patient: string,
    date: Date,
    hour: string,
    comments:string,
}