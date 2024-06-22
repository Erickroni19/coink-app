import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [RouterOutlet, IonicModule],
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss'],
})
export class RegisterLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
