import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-finish-registration',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './finish-registration.component.html',
  styleUrls: ['./finish-registration.component.scss'],
})
export class FinishRegistrationComponent  implements OnInit {

   alertButtons = ['Action'];

  constructor( private router: Router ) { }

  ngOnInit() {}

  onLinkClick(event: Event): void {
    event.preventDefault();
  }

  succesfulRegistration():void {

  }

}
