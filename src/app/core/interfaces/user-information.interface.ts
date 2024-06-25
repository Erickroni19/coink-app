import { DocumentType } from "./reference-data.interface";

export interface UserInformation {
  phoneNumber?: string,
  documentType: DocumentType,
  documentNumber: number,
  documentIssueDate: string,
  birthDate: string,
  gender: string,
  email: string,
  pin: string
}
