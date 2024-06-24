import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RegisterLayoutService } from '../../../core/services/register-layout.service';

@Component({
  selector: 'app-finish-registration',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './finish-registration.component.html',
  styleUrls: ['./finish-registration.component.scss'],
})
export class FinishRegistrationComponent  implements OnInit, OnDestroy {

  // private subscription!: Subscription;
  alertButtons = ['Action'];

  constructor(
    private router: Router,
    private registerLayoutService: RegisterLayoutService
  ) { }

  ngOnInit() {
    // this.registerLayoutService.setBackupTitleRoute({ route: 'account-information', title: 'DATOS DE CUENTA' })
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // this.registerLayoutService.setTitleRoute({ route: 'phone-number', title: 'DATOS DE CUENTA' })
  }

  onLinkClick(event: Event): void {
    event.preventDefault();
  }

  goToHome():void {
    this.router.navigateByUrl('home')
  }

  succesfulRegistration():void {

  }

}
