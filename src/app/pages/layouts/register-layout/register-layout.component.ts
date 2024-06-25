import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TitleRoute } from '../../../core/interfaces/register-layout.interface';


@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [ RouterOutlet, IonicModule, RouterModule ],
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss'],
})
export class RegisterLayoutComponent {

  public titleRoute: TitleRoute = {
    route: '',
    title: ''
  }



}
