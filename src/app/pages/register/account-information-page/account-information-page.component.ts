import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-account-information-page',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './account-information-page.component.html',
  styleUrls: ['./account-information-page.component.scss'],
})
export class AccountInformationPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
