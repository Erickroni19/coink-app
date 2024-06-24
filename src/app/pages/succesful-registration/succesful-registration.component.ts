import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-succesful-registration',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './succesful-registration.component.html',
  styleUrls: ['./succesful-registration.component.scss'],
})
export class SuccesfulRegistrationComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}



}
