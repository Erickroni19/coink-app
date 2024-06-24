import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RegisterLayoutService } from '../../../core/services/register-layout.service';

@Component({
  selector: 'app-account-information-page',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './account-information-page.component.html',
  styleUrls: ['./account-information-page.component.scss'],
})
export class AccountInformationPageComponent implements OnInit{

  constructor(
    private router: Router,
    private registerLayoutService: RegisterLayoutService
  ) { }

  ngOnInit(): void {
    // this.registerLayoutService.setBackupTitleRoute({ route: 'phone-number', title: 'NÚMERO CELULAR' })
  }

  goToFinishRegistration():void {
    this.router.navigateByUrl('register/finish')
    this.setLayoutInfo();
  }

  setLayoutInfo():void {
   this.registerLayoutService.setTitleRoute({ route: 'account-information', title: 'FINALIZAR' })
  }
}
