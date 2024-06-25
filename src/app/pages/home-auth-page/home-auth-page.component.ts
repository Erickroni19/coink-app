import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-auth-page',
  standalone: true,
  imports: [ IonicModule, RouterModule ],
  templateUrl: './home-auth-page.component.html',
  styleUrls: ['./home-auth-page.component.scss'],
})
export class HomeAuthPageComponent {

  constructor() { }


}
