import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInformation } from '../interfaces/user-information.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

   private _userInformation = new BehaviorSubject<UserInformation>(
    {
      phoneNumber: '',
      documentType: {
        id: 0,
        notation: '',
        description: ''
      },
      documentNumber: 0,
      dateIssue: '',
      dateOfBirth: '',
      gender: '',
      email: '',
      pin: ''
    }
  );

  setPhoneNumber(phoneNumber: number){

  }

  setUserInformation( userInfo: UserInformation):void {
    this._userInformation.next(userInfo);
  }

  get geUserInformatione():Observable<UserInformation>{
    return this._userInformation.asObservable();
  }
}
