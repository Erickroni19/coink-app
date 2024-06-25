import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-numeric-keypad',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule ],
  templateUrl: './numeric-keypad.component.html',
  styleUrls: ['./numeric-keypad.component.scss'],
})
export class NumericKeypadComponent {

  public phoneNumber: string = '';
  public keys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'backspace', '0', 'checkmark'];

  @Output()
    public getNumber = new EventEmitter<string>();

  constructor(private router: Router) { }

  addNumber(key: string) {
    this.phoneNumber += key;
  }

  deleteNumber() {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
  }

  getPhoneNumber() {
    this.getNumber.emit(this.phoneNumber);
  }

  goToAccountInformation():void {
    this.router.navigateByUrl('register/account-information')

    this.getPhoneNumber()
  }
}
