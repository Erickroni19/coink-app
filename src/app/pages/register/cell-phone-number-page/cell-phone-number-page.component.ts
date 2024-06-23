import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NumericKeypadComponent } from '../../../shared/numeric-keypad/numeric-keypad.component';

@Component({
  selector: 'app-cell-phone-number-page',
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, NumericKeypadComponent ],
  templateUrl: './cell-phone-number-page.component.html',
  styleUrls: ['./cell-phone-number-page.component.scss'],
})
export class CellPhoneNumberPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
