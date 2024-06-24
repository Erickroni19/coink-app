import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { DocumentType } from '../interfaces/reference-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ReferenceDataService {

  private documentTypeUrl: string = 'https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106';
  private gendersUrl: string = 'https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106';

  constructor(private http: HttpClient) { }

  getDocumentTypes(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.documentTypeUrl}`);
  }
}
