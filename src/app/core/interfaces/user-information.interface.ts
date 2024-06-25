import { DocumentType } from "./reference-data.interface";

export interface UserInformation {
  phoneNumber?: string,
  documentType: DocumentType,
  documentNumber: number,
  dateIssue: string,
  dateOfBirth: string,
  gender: string,
  email: string,
  pin: string
}
