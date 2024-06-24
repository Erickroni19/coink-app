import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-numeric-keypad',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule ],
  templateUrl: './numeric-keypad.component.html',
  styleUrls: ['./numeric-keypad.component.scss'],
})
export class NumericKeypadComponent  implements OnInit {

  public phoneNumber: string = '';
  public keys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'backspace', '0', 'checkmark'];

  constructor(private router: Router) { }

  ngOnInit() {}

  addNumber(key: string) {
    this.phoneNumber += key;
  }

  deleteNumber() {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
  }

  goToAccountInformation():void {
    this.router.navigateByUrl('register/account-information')
  }

  // makeCall() {
  //   this.callNumber.callNumber(this.phoneNumber, true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }

}
