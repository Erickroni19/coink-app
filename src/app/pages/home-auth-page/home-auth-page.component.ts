import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterLayoutService } from '../../core/services/register-layout.service';

@Component({
  selector: 'app-home-auth-page',
  standalone: true,
  imports: [ IonicModule, RouterModule ],
  templateUrl: './home-auth-page.component.html',
  styleUrls: ['./home-auth-page.component.scss'],
})
export class HomeAuthPageComponent {

  constructor(private registerLayoutService: RegisterLayoutService) { }

  setLayoutInfo():void {
    this.registerLayoutService.setTitleRoute({ route: 'auth', title: 'NÚMERO CELULAR' })
  }

}
