import { UserInformation } from './../../core/interfaces/user-information.interface';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserInformationService } from '../../core/services/user-information.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-succesful-registration',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './succesful-registration.component.html',
  styleUrls: ['./succesful-registration.component.scss'],
})
export class SuccesfulRegistrationComponent  implements OnInit {

  private subscription!: Subscription;

  public userInfo!: UserInformation;

  constructor(private userInformationService: UserInformationService) { }

  ngOnInit() {
    this.userInformationService.geUserInformatione.subscribe( userInfo =>{
      this.userInfo = userInfo;
    })
  }



}
