import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-auth-page',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './home-auth-page.component.html',
  styleUrls: ['./home-auth-page.component.scss'],
})
export class HomeAuthPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
