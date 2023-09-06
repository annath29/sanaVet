import { Patient } from "./patientsmodel";

export interface Appointment{
    id?: number ,
    patient:Patient,
    date: Date,
    hour: string,
    comments:string,
}