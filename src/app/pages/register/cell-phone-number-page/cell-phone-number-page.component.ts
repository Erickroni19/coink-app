import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NumericKeypadComponent } from '../../../shared/numeric-keypad/numeric-keypad.component';
import { UserInformationService } from '../../../core/services/user-information.service';
import { UserInformation } from '../../../core/interfaces/user-information.interface';
import { RegisterHeaderComponent } from '../../../shared/register-header/register-header.component';

@Component({
  selector: 'app-cell-phone-number-page',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NumericKeypadComponent,
    RegisterHeaderComponent
  ],
  templateUrl: './cell-phone-number-page.component.html',
  styleUrls: ['./cell-phone-number-page.component.scss'],
})
export class CellPhoneNumberPageComponent implements OnInit  {

  constructor(
    private userInformationService: UserInformationService
  ) { }

  ngOnInit(): void {
  };

  setPhoneNumber(phoneNumber: string) {

    console.log(phoneNumber);


    const userInfo:UserInformation  = {
      phoneNumber: phoneNumber,
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

    this.userInformationService.setUserInformation(userInfo)
  }

}
