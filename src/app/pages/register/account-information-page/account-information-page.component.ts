import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-account-information-page',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './account-information-page.component.html',
  styleUrls: ['./account-information-page.component.scss'],
})
export class AccountInformationPageComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToFinishRegistration():void {
    this.router.navigateByUrl('register/finish')
  }
}
