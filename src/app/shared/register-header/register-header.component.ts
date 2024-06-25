import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'register-header',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './register-header.component.html',
  styleUrls: ['./register-header.component.scss'],
})
export class RegisterHeaderComponent{

  @Input()
    public routeBAck: string = '';

  @Input()
    public title: string = '';

  constructor(private router: Router){}

  goBack():void{
    this.router.navigateByUrl(this.routeBAck)
  }

}
