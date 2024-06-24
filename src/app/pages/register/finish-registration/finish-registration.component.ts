import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-finish-registration',
  standalone: true,
  imports: [IonicModule, RouterModule],
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

  goToHome():void {
    this.router.navigateByUrl('home')
  }

  succesfulRegistration():void {

  }

}
