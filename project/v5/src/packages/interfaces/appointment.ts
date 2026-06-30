export interface Appointment {
  slotId: string;
  patientId: string;
  countryISO: COUNTRY_ISO;
}

enum COUNTRY_ISO {
  PE = "PE",
  CL = "CL",
  CO = "CO",
}
