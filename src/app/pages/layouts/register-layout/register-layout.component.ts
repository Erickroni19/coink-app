import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RegisterLayoutService } from '../../../core/services/register-layout.service';
import { Subscription } from 'rxjs';
import { TitleRoute } from '../../../core/interfaces/register-layout.interface';


@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [ RouterOutlet, IonicModule, RouterModule ],
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss'],
})
export class RegisterLayoutComponent  implements OnInit, OnDestroy {

  private subscription!: Subscription;

  public titleRoute: TitleRoute = {
    route: '',
    title: ''
  }

  constructor(private registerLayoutService: RegisterLayoutService) { }

  ngOnInit() {
    this.subscription = this.registerLayoutService.getTitleImage.subscribe( respTitleRoute => {
      this.titleRoute = respTitleRoute;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setLayoutInfo():void {
   this.registerLayoutService.setTitleRoute(this.titleRoute)
  }

}
