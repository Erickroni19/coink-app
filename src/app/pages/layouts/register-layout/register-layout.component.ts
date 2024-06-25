import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [ RouterOutlet, IonicModule, RouterModule ],
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss'],
})
export class RegisterLayoutComponent {

}
